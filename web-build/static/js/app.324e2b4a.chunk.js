(this.webpackJsonp = this.webpackJsonp || []).push([
  [0],
  {
    261: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return mt;
      });
      var a = {};
      n.r(a),
        n.d(a, "fetchAll", function () {
          return te;
        }),
        n.d(a, "fetchByCategory", function () {
          return ne;
        }),
        n.d(a, "create", function () {
          return ae;
        });
      var r = {};
      n.r(r),
        n.d(r, "loginOrCreateAccount", function () {
          return re;
        });
      var o = {};
      n.r(o),
        n.d(o, "create", function () {
          return oe;
        }),
        n.d(o, "search", function () {
          return ce;
        });
      var c = n(262),
        l = n(0),
        i = n.n(l),
        u = n(464),
        s = n(213),
        m = n(34),
        f = n(214),
        d = n(3),
        p = n.n(d),
        b = n(9),
        g = n.n(b),
        y = n(4),
        E = n.n(y),
        h = n(454),
        v = n(461),
        O = n(171);
      function x(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(n), !0).forEach(function (t) {
                p()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var w = n(239);
      function S() {
        return Object(w.a)();
      }
      var k = n(35),
        C = n.n(k),
        P = n(242),
        I = n(459),
        A = n(455),
        T = n(456),
        _ = n(136),
        B = n(460),
        D = {
          light: {
            text: "#000",
            background: "#fff",
            tint: "#2f95dc",
            tabIconDefault: "#ccc",
            tabIconSelected: "#2f95dc",
          },
          dark: {
            text: "#fff",
            background: "#000",
            tint: "#fff",
            tabIconDefault: "#ccc",
            tabIconSelected: "#fff",
          },
        },
        L = n(1),
        M = n(29),
        z = n(240),
        R = n(2);
      function V(e) {
        var t = e.navigation;
        return l.createElement(
          R.a,
          { style: H.container },
          l.createElement(
            M.a,
            { style: H.title },
            "This screen doesn't exist."
          ),
          l.createElement(
            z.a,
            {
              onPress: function () {
                return t.replace("Root");
              },
              style: H.link,
            },
            l.createElement(M.a, { style: H.linkText }, "Go to home screen!")
          )
        );
      }
      var H = L.a.create({
          container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          },
          title: { fontSize: 20, fontWeight: "bold" },
          link: { marginTop: 15, paddingVertical: 15 },
          linkText: { fontSize: 14, color: "#2e78b7" },
        }),
        N = n(94),
        F = n(72),
        U = n(33),
        G = n(183),
        W = n(184),
        J = n(27),
        q = n(185),
        K = n(212),
        Q = n(48),
        X = n(30),
        Y = n(51),
        Z = n(20);
      function $(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $(Object(n), !0).forEach(function (t) {
                p()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var te = function (e) {
          var t, n, a;
          return E.a.async(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (
                      (t = e.token),
                      (r.next = 3),
                      E.a.awrap(
                        fetch(
                          Z.a.manifest.extra.API_BASE_URL + "/api/mementos/",
                          {
                            method: "GET",
                            headers: { Authorization: "Bearer " + t },
                          }
                        )
                      )
                    );
                  case 3:
                    return (n = r.sent), (r.next = 6), E.a.awrap(n.json());
                  case 6:
                    return (a = r.sent), r.abrupt("return", a);
                  case 8:
                  case "end":
                    return r.stop();
                }
            },
            null,
            null,
            null,
            Promise
          );
        },
        ne = function (e, t) {
          var n, a, r;
          return E.a.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    return (
                      (n = t.token),
                      (o.next = 3),
                      E.a.awrap(
                        fetch(
                          Z.a.manifest.extra.API_BASE_URL +
                            "/api/mementos/?category=" +
                            e,
                          {
                            method: "GET",
                            headers: { Authorization: "Bearer " + n },
                          }
                        )
                      )
                    );
                  case 3:
                    return (a = o.sent), (o.next = 6), E.a.awrap(a.json());
                  case 6:
                    return (r = o.sent), o.abrupt("return", r);
                  case 8:
                  case "end":
                    return o.stop();
                }
            },
            null,
            null,
            null,
            Promise
          );
        },
        ae = function (e, t) {
          var n, a, r, o;
          return E.a.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    return (
                      (n = t.token),
                      (a = ee(
                        ee({}, Object(Q.omit)(e, ["category"])),
                        {},
                        { category_id: e.category.id }
                      )),
                      (c.next = 4),
                      E.a.awrap(
                        fetch(
                          Z.a.manifest.extra.API_BASE_URL + "/api/mementos/",
                          {
                            method: "POST",
                            headers: {
                              Authorization: "Bearer " + n,
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(a),
                          }
                        )
                      )
                    );
                  case 4:
                    return (r = c.sent), (c.next = 7), E.a.awrap(r.json());
                  case 7:
                    return (o = c.sent), c.abrupt("return", o);
                  case 9:
                  case "end":
                    return c.stop();
                }
            },
            null,
            null,
            null,
            Promise
          );
        },
        re = function (e, t) {
          var n, a, r;
          return E.a.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    return (
                      (n = { username: e, password: t }),
                      (o.next = 3),
                      E.a.awrap(
                        fetch(
                          Z.a.manifest.extra.API_BASE_URL +
                            "/myauth/myauth/login_or_signup/",
                          {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(n),
                          }
                        )
                      )
                    );
                  case 3:
                    return (a = o.sent), (o.next = 6), E.a.awrap(a.json());
                  case 6:
                    return (r = o.sent), o.abrupt("return", r);
                  case 8:
                  case "end":
                    return o.stop();
                }
            },
            null,
            null,
            null,
            Promise
          );
        },
        oe = function (e, t) {
          var n, a, r, o;
          return E.a.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    return (
                      (n = t.token),
                      (a = { name: e }),
                      (c.next = 4),
                      E.a.awrap(
                        fetch(
                          Z.a.manifest.extra.API_BASE_URL +
                            "/api/memento-categories/",
                          {
                            method: "POST",
                            headers: {
                              Authorization: "Bearer " + n,
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(a),
                          }
                        )
                      )
                    );
                  case 4:
                    return (r = c.sent), (c.next = 7), E.a.awrap(r.json());
                  case 7:
                    return (o = c.sent), c.abrupt("return", o);
                  case 9:
                  case "end":
                    return c.stop();
                }
            },
            null,
            null,
            null,
            Promise
          );
        },
        ce = function (e, t) {
          var n, a, r;
          return E.a.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    return (
                      (n = t.token),
                      t.limit,
                      (o.next = 3),
                      E.a.awrap(
                        fetch(
                          Z.a.manifest.extra.API_BASE_URL +
                            "/api/memento-categories/?name=" +
                            e,
                          {
                            method: "GET",
                            headers: { Authorization: "Bearer " + n },
                          }
                        )
                      )
                    );
                  case 3:
                    return (a = o.sent), (o.next = 6), E.a.awrap(a.json());
                  case 6:
                    return (r = o.sent), o.abrupt("return", r);
                  case 8:
                  case "end":
                    return o.stop();
                }
            },
            null,
            null,
            null,
            Promise
          );
        },
        le = Object(Y.b)("auth/loginOrCreateAccount", function (e, t) {
          var n, a, o;
          return E.a.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = e.username),
                      (a = e.password),
                      (t.next = 3),
                      E.a.awrap(r.loginOrCreateAccount(n, a))
                    );
                  case 3:
                    return (o = t.sent), t.abrupt("return", o);
                  case 5:
                  case "end":
                    return t.stop();
                }
            },
            null,
            null,
            null,
            Promise
          );
        }),
        ie = Object(Y.c)({
          name: "auth",
          initialState: { is_logged_in: !1, username: "", token: "" },
          reducers: {
            logout: function (e) {
              (e.is_logged_in = !1), (e.username = ""), (e.token = "");
            },
          },
          extraReducers: function (e) {
            e.addCase(le.fulfilled, function (e, t) {
              var n = t.payload,
                a = n.username,
                r = n.token;
              (e.is_logged_in = !0), (e.username = a), (e.token = r);
            });
          },
        }),
        ue = ie.actions.logout,
        se = n(128),
        me = n.n(se),
        fe = Object(Y.b)("mementos/fetchAll", function (e, t) {
          var n;
          return E.a.async(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.getState().auth.token),
                      (e.next = 3),
                      E.a.awrap(a.fetchAll({ token: n }))
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            null,
            null,
            null,
            Promise
          );
        }),
        de = Object(Y.b)("mementos/create", function (e, t) {
          var n;
          return E.a.async(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (
                      (n = t.getState().auth.token),
                      (r.next = 3),
                      E.a.awrap(a.create(e, { token: n }))
                    );
                  case 3:
                    return r.abrupt("return", r.sent);
                  case 4:
                  case "end":
                    return r.stop();
                }
            },
            null,
            null,
            null,
            Promise
          );
        }),
        pe = Object(Y.c)({
          name: "mementos",
          initialState: { entities: {} },
          reducers: {},
          extraReducers: function (e) {
            e.addCase(fe.fulfilled, function (e, t) {
              var n = Object(Q.map)(t.payload, function (e) {
                  return [e.id, e];
                }),
                a = Object(Q.fromPairs)(n);
              e.entities = a;
            }),
              e.addCase(de.fulfilled, function (e, t) {
                Object(Q.set)(e.entities, t.payload.id, t.payload);
              }),
              e.addCase(ue, function (e) {
                e.entities = {};
              });
          },
        });
      me()(pe.actions);
      var be = Object(Y.b)("mementoHistory/fetchOne", function (e, t) {
          var n;
          return E.a.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), E.a.awrap(a.fetchByCategory(e));
                  case 2:
                    return (
                      (n = t.sent),
                      t.abrupt("return", { categoryId: e, mementos: n })
                    );
                  case 4:
                  case "end":
                    return t.stop();
                }
            },
            null,
            null,
            null,
            Promise
          );
        }),
        ge = Object(Y.c)({
          name: "mementoCategoryHistory",
          initialState: { entities: {} },
          reducers: {},
          extraReducers: function (e) {
            e.addCase(be.fulfilled, function (e, t) {
              var n = t.payload,
                a = n.categoryId,
                r = n.mementos;
              e.entities[a] = r;
            }),
              e.addCase(ue, function (e) {
                e.entities = {};
              });
          },
        });
      me()(ge.actions);
      var ye = function (e) {
          var t = Object(l.useState)(""),
            n = g()(t, 2),
            a = n[0],
            r = n[1],
            o = Object(X.o)(),
            c = Object(m.b)(),
            u = Object(m.c)(function (e) {
              return Object(Q.orderBy)(
                Object(Q.values)(e.mementos.entities),
                function (e) {
                  return N.DateTime.fromISO(e.created_at);
                },
                ["desc"]
              );
            }),
            s = Object(l.useMemo)(
              function () {
                return a
                  ? u.filter(function (e) {
                      return e.category.name
                        .toLowerCase()
                        .includes(a.toLowerCase());
                    })
                  : u;
              },
              [u, a]
            );
          Object(l.useEffect)(function () {
            c(fe());
          }, []);
          var f = Object(l.useCallback)(function (e) {
            var t = e.item;
            return i.a.createElement(U.b.Item, {
              title: t.category.name,
              description: function (e) {
                return i.a.createElement(
                  R.a,
                  e,
                  i.a.createElement(
                    G.a,
                    { numberOfLines: 1, ellipsizeMode: "tail" },
                    t.notes
                  ),
                  i.a.createElement(
                    R.a,
                    { style: { flexDirection: "row" } },
                    i.a.createElement(
                      W.a,
                      { icon: "calendar" },
                      i.a.createElement(
                        J.a,
                        null,
                        N.DateTime.fromISO(t.created_at).toLocaleString()
                      )
                    ),
                    t.location &&
                      i.a.createElement(
                        W.a,
                        { style: { marginLeft: 8 }, icon: "map-marker" },
                        i.a.createElement(J.a, null, t.location)
                      )
                  )
                );
              },
              left: function (e) {
                return i.a.createElement(
                  U.b.Icon,
                  C()({}, e, { icon: "note" })
                );
              },
            });
          }, []);
          return i.a.createElement(
            R.a,
            { style: Ee.container },
            i.a.createElement(q.a, {
              placeholder: "Search",
              value: a,
              onChangeText: r,
            }),
            i.a.createElement(F.a, {
              style: Ee.list,
              data: s,
              renderItem: f,
              keyExtractor: function (e) {
                return e.id;
              },
            }),
            i.a.createElement(K.a, {
              style: Ee.fab,
              icon: "plus",
              onPress: function () {
                return o.navigate("MementoCreate");
              },
            })
          );
        },
        Ee = L.a.create({
          container: {
            flex: 1,
            alignItems: "stretch",
            paddingTop: 24,
            display: "flex",
            flexDirection: "column",
            paddingHorizontal: 24,
          },
          list: { flex: 1, marginVertical: 16 },
          fab: { position: "absolute", margin: 16, right: 0, bottom: 0 },
        }),
        he = n(55),
        ve = n(123),
        Oe = function (e) {
          var t,
            n,
            a = e.mementoId,
            r = Object(X.o)(),
            o = Object(m.b)(),
            c = Object(m.c)(function (e) {
              return e.mementos.entities[a];
            }),
            u = Object(m.c)(function (e) {
              var t;
              return Object(Q.get)(
                e.mementoCategoryHistory.entities,
                null == c || null == (t = c.category) ? void 0 : t.id,
                []
              );
            });
          Object(l.useEffect)(
            function () {
              var e;
              o(be(null == c || null == (e = c.category) ? void 0 : e.id));
            },
            [null == c || null == (t = c.category) ? void 0 : t.id]
          );
          var s = Object(l.useCallback)(function (e) {
              var t = e.item;
              return i.a.createElement(U.b.Item, {
                title: t.category.name,
                description: function (e) {
                  return i.a.createElement(
                    R.a,
                    e,
                    i.a.createElement(
                      G.a,
                      { numberOfLines: 1, ellipsizeMode: "tail" },
                      t.notes
                    ),
                    i.a.createElement(
                      R.a,
                      { style: { flexDirection: "row" } },
                      i.a.createElement(
                        W.a,
                        { icon: "calendar" },
                        i.a.createElement(
                          M.a,
                          null,
                          N.DateTime.fromISO(t.created_at).toLocaleString()
                        )
                      ),
                      i.a.createElement(
                        W.a,
                        { style: { marginLeft: 8 }, icon: "map-marker" },
                        i.a.createElement(M.a, null, t.location)
                      )
                    )
                  );
                },
                onPress: function () {
                  return r.navigate("MementoItem", { mementoId: t.id });
                },
                left: function (e) {
                  return i.a.createElement(
                    U.b.Icon,
                    C()({}, e, { icon: "note" })
                  );
                },
              });
            }, []),
            f =
              (null == c ? void 0 : c.location) +
              " - " +
              N.DateTime.fromISO(
                null == c ? void 0 : c.created_at
              ).toLocaleString();
          return i.a.createElement(
            R.a,
            { style: xe.container },
            i.a.createElement(
              he.a,
              null,
              i.a.createElement(
                ve.a,
                { style: xe.card },
                i.a.createElement(ve.a.Title, {
                  title:
                    null == c || null == (n = c.category) ? void 0 : n.name,
                  subtitle: f,
                  left: function (e) {
                    return i.a.createElement(
                      U.a.Icon,
                      C()({}, e, { icon: "note" })
                    );
                  },
                }),
                i.a.createElement(
                  ve.a.Content,
                  null,
                  i.a.createElement(G.a, null, null == c ? void 0 : c.notes)
                )
              ),
              i.a.createElement(
                ve.a,
                { style: [xe.card] },
                i.a.createElement(ve.a.Title, {
                  title: "Other Entries",
                  left: function (e) {
                    return i.a.createElement(
                      U.a.Icon,
                      C()({}, e, { icon: "note-multiple" })
                    );
                  },
                }),
                i.a.createElement(
                  ve.a.Content,
                  null,
                  i.a.createElement(F.a, {
                    data: null != u ? u : [],
                    renderItem: s,
                    keyExtractor: function (e) {
                      return e.id;
                    },
                  })
                )
              )
            )
          );
        },
        xe = L.a.create({
          container: {
            flex: 1,
            alignItems: "center",
            paddingTop: 24,
            display: "flex",
            flexDirection: "column",
          },
          card: { maxWidth: 360, minWidth: 240, marginVertical: 8 },
        }),
        je = n(90),
        we = n(121),
        Se = n(211),
        ke = n(186),
        Ce = n(187),
        Pe = n(13),
        Ie = n.n(Pe),
        Ae = n(251),
        Te = n(75),
        _e = n(83),
        Be = function () {
          var e = Object(je.b)("category"),
            t = g()(e, 3),
            n = t[0],
            a = (t[1], t[2]),
            r = Object(m.c)(function (e) {
              return e.auth;
            }),
            c = Object(l.useState)(""),
            u = g()(c, 2),
            s = u[0],
            f = u[1],
            d = Object(l.useState)(n.value),
            p = g()(d, 2),
            b = p[0],
            y = p[1],
            h = Object(l.useCallback)(
              function (e) {
                var t;
                return E.a.async(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            ((t = e), "create" !== (null == e ? void 0 : e.id))
                          ) {
                            n.next = 5;
                            break;
                          }
                          return (
                            (n.next = 4),
                            E.a.awrap(o.create(e.original, { token: r.token }))
                          );
                        case 4:
                          t = n.sent;
                        case 5:
                          a.setValue(t), y(t);
                        case 7:
                        case "end":
                          return n.stop();
                      }
                  },
                  null,
                  null,
                  null,
                  Promise
                );
              },
              [null == r ? void 0 : r.token]
            ),
            v = Object(l.useCallback)(
              function () {
                f(""), h(null);
              },
              [h]
            ),
            O = Object(l.useCallback)(
              function () {
                var e;
                return E.a.async(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!(s.length < 2)) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return", []);
                        case 2:
                          return (
                            (t.next = 4),
                            E.a.awrap(o.search(s, { token: r.token }))
                          );
                        case 4:
                          return (
                            (e = t.sent),
                            t.abrupt(
                              "return",
                              [].concat(Ie()(e), [
                                {
                                  id: "create",
                                  name: "Create: " + s,
                                  original: s,
                                },
                              ])
                            )
                          );
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  },
                  null,
                  null,
                  null,
                  Promise
                );
              },
              [s, null == r ? void 0 : r.token]
            ),
            x = Object(Ae.a)({ promiseFn: O }),
            j = x.data,
            w = void 0 === j ? [] : j,
            S = x.isPending,
            k =
              (x.error,
              Object(l.useCallback)(function (e) {
                var t = e.item,
                  n = "create" === t.id ? "pencil-plus" : "tag";
                return i.a.createElement(U.b.Item, {
                  title: t.name,
                  left: function (e) {
                    return i.a.createElement(U.b.Icon, C()({}, e, { icon: n }));
                  },
                  onPress: function () {
                    return h(t);
                  },
                });
              }, []));
          return Object(Q.isNil)(b)
            ? i.a.createElement(
                R.a,
                { style: De.container },
                i.a.createElement(Se.a, {
                  label: "Search",
                  mode: "outlined",
                  style: De.field,
                  value: s,
                  onChangeText: f,
                }),
                S && i.a.createElement(_e.a, { animating: !0 }),
                i.a.createElement(F.a, { data: w, renderItem: k })
              )
            : i.a.createElement(
                R.a,
                { style: De.container },
                i.a.createElement(U.b.Item, {
                  title: b.name,
                  left: function (e) {
                    return i.a.createElement(
                      U.b.Icon,
                      C()({}, e, { icon: "tag" })
                    );
                  },
                  right: function (e) {
                    return i.a.createElement(
                      Te.a,
                      C()({}, e, { onPress: v, icon: "delete" })
                    );
                  },
                })
              );
        },
        De = L.a.create({
          container: {
            flexDirection: "column",
            alignItems: "stretch",
            marginVertical: 8,
          },
          field: { marginVertical: 8 },
        }),
        Le = function () {
          var e = Object(X.o)(),
            t = Object(m.b)(),
            n = Object(l.useCallback)(function (n) {
              return E.a.async(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (a.next = 2), E.a.awrap(t(de(n)));
                      case 2:
                        e.navigate("MementoHistory");
                      case 3:
                      case "end":
                        return a.stop();
                    }
                },
                null,
                null,
                null,
                Promise
              );
            }, []);
          return i.a.createElement(
            he.a,
            null,
            i.a.createElement(
              R.a,
              { style: Me.container },
              i.a.createElement(
                R.a,
                { style: Me.column },
                i.a.createElement(we.a, null, "Create Memento"),
                i.a.createElement(
                  je.a,
                  {
                    initialValues: { notes: "", location: "" },
                    validationSchema: null,
                    onSubmit: n,
                  },
                  function (e) {
                    var t = e.handleChange,
                      n = e.handleBlur,
                      a = e.handleSubmit,
                      r = e.values,
                      o = e.errors,
                      c = e.touched;
                    return i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        U.b.Section,
                        null,
                        i.a.createElement(
                          U.b.Accordion,
                          { title: "Category" },
                          i.a.createElement(Be, null)
                        ),
                        i.a.createElement(
                          U.b.Accordion,
                          { title: "Info" },
                          i.a.createElement(
                            R.a,
                            { style: Me.innerAccordion },
                            i.a.createElement(Se.a, {
                              style: Me.field,
                              label: "Location",
                              mode: "outlined",
                              onChangeText: t("location"),
                              onBlur: n("location"),
                              value: r.location,
                              error: !!o.location && !!c.location,
                            }),
                            i.a.createElement(
                              ke.a,
                              {
                                type: "error",
                                visible: !!o.location && !!c.location,
                              },
                              o.location
                            ),
                            i.a.createElement(Se.a, {
                              style: Me.field,
                              label: "Notes",
                              mode: "outlined",
                              multiline: !0,
                              numberOfLines: 4,
                              onChangeText: t("notes"),
                              onBlur: n("notes"),
                              value: r.notes,
                              error: !!o.notes && !!c.notes,
                            }),
                            i.a.createElement(
                              ke.a,
                              {
                                type: "error",
                                visible: !!o.notes && !!c.notes,
                              },
                              o.notes
                            )
                          )
                        )
                      ),
                      i.a.createElement(
                        Ce.a,
                        { onPress: a, mode: "outlined" },
                        "Create"
                      )
                    );
                  }
                )
              )
            )
          );
        },
        Me = L.a.create({
          column: {
            flex: 1,
            alignItems: "stretch",
            paddingTop: 24,
            paddingHorizontal: 24,
            display: "flex",
            flexDirection: "column",
            maxWidth: 480,
          },
          container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          },
          innerAccordion: {},
          field: { marginVertical: 8 },
          createCategory: { marginVertical: 8 },
        }),
        ze = n(147),
        Re = ze
          .a()
          .shape({
            username: ze.b().required().max(120),
            password: ze.b().required().min(6),
          }),
        Ve = function () {
          var e = Object(m.b)(),
            t = Object(X.o)(),
            n = Object(l.useCallback)(function (n) {
              return E.a.async(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.next = 2),
                          E.a.awrap(
                            e(
                              le({ username: n.username, password: n.password })
                            ).unwrap()
                          )
                        );
                      case 2:
                        t.navigate("Root");
                      case 3:
                      case "end":
                        return a.stop();
                    }
                },
                null,
                null,
                null,
                Promise
              );
            }, []);
          return i.a.createElement(
            R.a,
            { style: He.container },
            i.a.createElement(
              R.a,
              { style: He.column },
              i.a.createElement(we.a, null, "Login"),
              i.a.createElement(
                G.a,
                { style: He.notice },
                "If you don't have an account, one will be created with the given username and password"
              ),
              i.a.createElement(
                je.a,
                {
                  initialValues: { username: "", password: "" },
                  validationSchema: Re,
                  onSubmit: n,
                },
                function (e) {
                  var t = e.handleChange,
                    n = e.handleBlur,
                    a = e.values,
                    r = e.handleSubmit,
                    o = e.isValid,
                    c = e.errors,
                    l = e.touched,
                    u = e.isSubmitting;
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(Se.a, {
                      style: He.field,
                      label: "Username",
                      mode: "outlined",
                      onChangeText: t("username"),
                      onBlur: n("username"),
                      value: a.username,
                      error: !!c.username && !!l.username,
                    }),
                    i.a.createElement(
                      ke.a,
                      { type: "error", visible: !!c.username && !!l.username },
                      c.username
                    ),
                    i.a.createElement(Se.a, {
                      style: He.field,
                      label: "Password",
                      mode: "outlined",
                      secureTextEntry: !0,
                      onChangeText: t("password"),
                      onBlur: n("password"),
                      value: a.password,
                      error: !!c.password && !!l.password,
                    }),
                    i.a.createElement(
                      ke.a,
                      { type: "error", visible: !!c.password && !!l.password },
                      c.password
                    ),
                    i.a.createElement(
                      Ce.a,
                      {
                        style: He.getStartedAction,
                        disabled: !o || u,
                        loading: u,
                        onPress: r,
                        mode: "outlined",
                      },
                      "Get Started"
                    )
                  );
                }
              )
            )
          );
        },
        He = L.a.create({
          container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          },
          column: {
            flex: 1,
            alignItems: "stretch",
            paddingTop: 24,
            paddingHorizontal: 24,
            display: "flex",
            flexDirection: "column",
            maxWidth: 480,
          },
          field: { marginVertical: 8 },
          getStartedAction: { marginTop: 8 },
          notice: { marginVertical: 8 },
        }),
        Ne = function () {
          var e = Object(m.b)(),
            t = Object(l.useCallback)(function () {
              e(ue());
            }, []);
          return i.a.createElement(
            R.a,
            { style: Fe.container },
            i.a.createElement(
              R.a,
              { style: Fe.column },
              i.a.createElement(we.a, null, "Account"),
              i.a.createElement(
                Ce.a,
                { mode: "outlined", onPress: t },
                "Logout"
              )
            )
          );
        },
        Fe = L.a.create({
          container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          },
          column: {
            flex: 1,
            alignItems: "stretch",
            paddingTop: 24,
            paddingHorizontal: 24,
            display: "flex",
            flexDirection: "column",
            maxWidth: 480,
          },
          field: { marginVertical: 8 },
          getStartedAction: { marginTop: 8 },
          notice: { marginVertical: 8 },
        });
      function Ue(e) {
        e.navigation;
        return l.createElement(ye, null);
      }
      function Ge(e) {
        e.navigation;
        var t,
          n = e.route;
        return l.createElement(Oe, {
          mementoId: null == (t = n.params) ? void 0 : t.mementoId,
        });
      }
      var We = function () {
          return l.createElement(Ne, null);
        },
        Je = {
          prefixes: [n(263).a("/")],
          config: {
            screens: {
              Root: {
                screens: {
                  MementoStack: {
                    screens: {
                      MementoHistory: "mementos/history",
                      MementoCreate: "mementos/create",
                      MementoItem: "mementos/item",
                    },
                  },
                  Settings: "settings",
                },
              },
              Auth: "auth",
              NotFound: "*",
            },
          },
        };
      function qe(e) {
        e.navigation, e.route;
        return l.createElement(Le, null);
      }
      function Ke(e) {
        e.navigation, e.route;
        return l.createElement(Ve, null);
      }
      function Qe(e) {
        var t = e.colorScheme;
        return l.createElement(
          A.a,
          { linking: Je, theme: "dark" === t ? T.a : _.a },
          l.createElement(Ye, null)
        );
      }
      var Xe = Object(B.a)();
      function Ye() {
        var e = Object(m.c)(function (e) {
          return e.auth.is_logged_in;
        });
        return l.createElement(
          Xe.Navigator,
          null,
          e
            ? l.createElement(
                l.Fragment,
                null,
                l.createElement(Xe.Screen, {
                  name: "Root",
                  component: $e,
                  options: { headerShown: !1 },
                }),
                l.createElement(Xe.Screen, {
                  name: "NotFound",
                  component: V,
                  options: { title: "Oops!" },
                })
              )
            : l.createElement(
                l.Fragment,
                null,
                l.createElement(Xe.Screen, {
                  name: "Auth",
                  component: Ke,
                  options: { title: "Mementos" },
                })
              )
        );
      }
      var Ze = Object(I.a)();
      function $e() {
        var e = S();
        return l.createElement(
          Ze.Navigator,
          {
            initialRouteName: "MementoStack",
            screenOptions: {
              tabBarActiveTintColor: D[e].tint,
              tabBarShowLabel: !1,
            },
          },
          l.createElement(Ze.Screen, {
            name: "MementoStack",
            component: tt,
            options: {
              headerShown: !1,
              tabBarIcon: function (e) {
                var t = e.color;
                return l.createElement(nt, { name: "note-multiple", color: t });
              },
            },
          }),
          l.createElement(Ze.Screen, {
            name: "Settings",
            component: We,
            options: {
              title: "Settings",
              tabBarIcon: function (e) {
                var t = e.color;
                return l.createElement(nt, { name: "account", color: t });
              },
            },
          })
        );
      }
      var et = Object(B.a)();
      function tt() {
        return l.createElement(
          et.Navigator,
          { screenOptions: { title: "Mementos" } },
          l.createElement(et.Screen, { name: "MementoHistory", component: Ue }),
          l.createElement(
            et.Group,
            { screenOptions: { presentation: "modal" } },
            l.createElement(et.Screen, { name: "MementoItem", component: Ge }),
            l.createElement(et.Screen, { name: "MementoCreate", component: qe })
          )
        );
      }
      function nt(e) {
        return l.createElement(
          P.a,
          C()({ size: 30, style: { marginBottom: -3 } }, e)
        );
      }
      var at = n(45),
        rt = n(65),
        ot = n(260),
        ct = { key: "root", version: 1, storage: n.n(ot).a },
        lt = Object(at.b)({
          mementos: pe.reducer,
          auth: ie.reducer,
          mementoCategoryHistory: ge.reducer,
        }),
        it = Object(rt.g)(ct, lt),
        ut = Object(Y.a)({
          reducer: it,
          middleware: function (e) {
            return e({
              serializableCheck: {
                ignoredActions: [rt.a, rt.f, rt.b, rt.c, rt.d, rt.e],
              },
            });
          },
        }),
        st = Object(rt.h)(ut);
      function mt() {
        var e = (function () {
            var e = l.useState(!1),
              t = g()(e, 2),
              a = t[0],
              r = t[1];
            return (
              l.useEffect(function () {
                E.a.async(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            O.b(),
                            (e.next = 4),
                            E.a.awrap(
                              v.b(
                                j(j({}, h.a.font), {}, { "space-mono": n(311) })
                              )
                            )
                          );
                        case 4:
                          e.next = 9;
                          break;
                        case 6:
                          (e.prev = 6), (e.t0 = e.catch(0)), console.warn(e.t0);
                        case 9:
                          return (e.prev = 9), r(!0), O.a(), e.finish(9);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  null,
                  null,
                  [[0, 6, 9, 13]],
                  Promise
                );
              }, []),
              a
            );
          })(),
          t = S();
        return e
          ? i.a.createElement(
              m.a,
              { store: ut },
              i.a.createElement(
                f.a,
                { loading: null, persistor: st },
                i.a.createElement(
                  s.a,
                  null,
                  i.a.createElement(
                    u.b,
                    null,
                    i.a.createElement(Qe, { colorScheme: t }),
                    i.a.createElement(c.a, null)
                  )
                )
              )
            )
          : null;
      }
    },
    289: function (e, t, n) {
      e.exports = n(448);
    },
    311: function (e, t, n) {
      e.exports = n.p + "./fonts/SpaceMono-Regular.ttf";
    },
    439: function (e, t) {},
  },
  [[289, 1, 2]],
]);
//# sourceMappingURL=app.324e2b4a.chunk.js.map
