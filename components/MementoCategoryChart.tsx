import React, { useMemo } from "react";
import { DateTime, Duration } from "luxon";
import { get, map, reduce } from "lodash";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import {
  Path,
  Chart,
  useChart,
  useLayout,
  useLine,
} from "react-native-web-svg-charts";

import { Memento } from "../models";

type Props = {
  mementos: Memento[];
};

export const MementoCategoryChart: React.FC<Props> = ({ mementos }) => {
  const data = useMemo(() => {
    let ret = [];

    // convert to dates
    const dates = map(mementos, (item) => {
      return DateTime.fromISO(item.created_at).toISODate();
    });

    // bucket by date
    const buckets = reduce(
      dates,
      (acc, current) => ({
        ...acc,
        [current]: (acc[current] ?? 0) + 1,
      }),
      {} as Record<string, number>
    );

    const thirtyDasyAgo = DateTime.now().minus(
      Duration.fromObject({ days: 30 })
    );

    for (let i = 1; i <= 30; i++) {
      const datetime = thirtyDasyAgo
        .plus(Duration.fromObject({ days: i }))
        .toISODate();

      ret.push(get(buckets, datetime, 0));
    }

    return ret;
  }, [mementos]);

  const { width, height, onLayout } = useLayout();

  const { x, y, mappedData } = useChart({
    width,
    height,
    data,
    contentInset: { top: 20, bottom: 20 },
  });
  const { line } = useLine({
    mappedData,
    x,
    y,
  });

  return (
    <Chart style={{ height: 200 }} {...{ width, height, onLayout }}>
      <Gradient />
      <Path
        fill="none"
        strokeWidth={2}
        stroke="url(#gradient)"
        d={line}
        animate
        animationDuration={300}
      />
    </Chart>
  );
};

const Gradient = () => (
  <Defs key={"gradient"}>
    <LinearGradient id={"gradient"} x1={"0"} y={"0%"} x2={"100%"} y2={"0%"}>
      <Stop offset={"0%"} stopColor={"rgb(134, 65, 244)"} />
      <Stop offset={"100%"} stopColor={"rgb(66, 194, 244)"} />
    </LinearGradient>
  </Defs>
);
