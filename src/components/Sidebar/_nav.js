export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW"
      }
    },
    {
      name: "Demo",
      url: "/demo",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW"
      }
    },
    {
      title: true,
      name: "UI elements",
      wrapper: {
        // optional wrapper object
        element: "span", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Components",
      url: "/components",
      icon: "icon-puzzle",
      children: [
        {
          name: "Buttons",
          url: "/components/buttons",
          icon: "icon-puzzle"
        },
        {
          name: "Social Buttons",
          url: "/components/social-buttons",
          icon: "icon-puzzle"
        },
        {
          name: "Cards",
          url: "/components/cards",
          icon: "icon-puzzle"
        },
        {
          name: "Forms",
          url: "/components/forms",
          icon: "icon-puzzle"
        },
        {
          name: "Modals",
          url: "/components/modals",
          icon: "icon-puzzle"
        },
        {
          name: "Switches",
          url: "/components/switches",
          icon: "icon-puzzle"
        },
        {
          name: "Tables",
          url: "/components/tables",
          icon: "icon-puzzle"
        },
        {
          name: "Tabs",
          url: "/components/tabs",
          icon: "icon-puzzle"
        }
      ]
    }
  ]
};
