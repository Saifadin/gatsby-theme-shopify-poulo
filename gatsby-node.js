exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type NavItem {
      type: String
      displayName: String
      link: String
      subMenu: [SubMenu]
    }
    type SubMenu {
      link: String
      displayName: String
    }
  `;

  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers, schema }) => {
  createResolvers({
    Query: {
      // Modify birthday resolver so that it uses 1970-01-01 as default date
      siteNavigation: {
        type: `[NavItem!]!`,
        resolve(source, args, context, info) {
          // original resolver available as "info.originalResolver"
          const siteMetaData = context.nodeModel.getAllNodes({
            type: `Site`,
          })[0].siteMetadata;

          if (!siteMetaData) return [];
          if (!siteMetaData.navigation) return [];
          if (!siteMetaData.navigation.menu) return [];
          return siteMetaData.navigation.menu;
        },
      },
    },
  });
};
