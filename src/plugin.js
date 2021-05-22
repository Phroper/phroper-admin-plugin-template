import TestComp from "./TestComp";

export default {
  routes: [
    {
      exact: true,
      path: "/my-plugin",
      component: TestComp,
    },
  ],
  menus: [{ to: "/my-plugin", text: "Plugin menu" }],
  components: {
    PluginTest: TestComp,
  },
};
