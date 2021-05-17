module.exports = function (plop) {
  plop.setWelcomeMessage("Vui lòng chọn tính năng");
  plop.getGeneratorList();
  plop.setGenerator("addFont", {
    description: "Thêm font chữ",
    prompts: [
      {
        type: "input",
        name: "namefile",
        message: "Tên của font-face(chữ thường , liền nhau)",
      },
    ],
    actions: [
      {
        type: "append",
        path: "assets/scss/_reset.scss",
        pattern: `/* FONT_FACE */`,
        template: `@include font-face("{{namefile}}");`,
      },
    ],
  });
  plop.setGenerator("newKit", {
    description: "Tạo một Kit mới",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Tên của Kit:",
        default: "Test1",
      },
      {
        type: "rawlist",
        name: "route",
        message: "Đường dẫn muốn lưu này ( Ví dụ : components/menu):",
        choices: ["components", "contents", "partials"],
        answer: ["key:name", "value:route"],
      },

      {
        type: "confirm",
        name: "ask",
        message: "Bạn có muốn import vào kit?",
        abortOnFail: true,
        default: false,
      },
      {
        type: "input",
        name: "import",
        message: "Vị trí muốn import ( ví dụ : contents/_scrollbar)",
      },
    ],
    actions: function (data) {
      var actions = [];

      if (data.ask) {
        actions.push(
          {
            type: "add",
            path: "kit/{{route}}/_{{name}}.kit",
            templateFile: "templates/html/[html]newKit.hbs",
          },
          {
            type: "add",
            path: "assets/scss/{{route}}/_{{name}}.scss",
            templateFile: "templates/css/[css]newKit.hbs",
          },
          {
            type: "append",
            path: "assets/scss/main.scss",
            pattern: `/* PLOP_COMPONENTS_IMPORT */`,
            template: `@import '{{route}}/{{name}}';`,
          },
          {
            type: "append",
            path: "kit/{{import}}.kit",
            pattern: `<!-- PLOP_KIT_IMPORT -->`,
            template: `<!-- @import {{route}}/{{name}} -->`,
          }
        );
      } else {
        actions.push(
          {
            type: "add",
            path: "kit/{{route}}/_{{name}}.kit",
            templateFile: "templates/html/[html]newKit.hbs",
          },
          {
            type: "add",
            path: "assets/scss/{{route}}/_{{name}}.scss",
            templateFile: "templates/css/[css]newKit.hbs",
          },
          {
            type: "append",
            path: "assets/scss/main.scss",
            pattern: `/* PLOP_COMPONENTS_IMPORT */`,
            template: `@import '{{route}}/{{name}}';`,
          }
        );
      }

      return actions;
    },
  });
  plop.setGenerator("newPage", {
    description: "Tạo một Page mới",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Tên của Page:",
      },
      {
        type: "rawlist",
        name: "route",
        message: "Đường dẫn muốn lưu này ( Ví dụ : components/menu):",
        choices: ["components", "contents", "partials"],
        answer: ["key:name", "value:route"],
      },
    ],
    actions: [
      //Tạo file kit ngoài
      {
        type: "add",
        path: "kit/{{name}}.kit",
        templateFile: "templates/html/newPage.hbs",
      },
      //Tạo file kit nhỏ
      {
        type: "add",
        path: "kit/{{route}}/_{{name}}.kit",
      },
      //Tạo file scss
      {
        type: "add",
        path: "assets/scss/{{route}}/_{{name}}.scss",
        templateFile: "templates/css/[css]newPage.hbs",
      },
      //Import scss
      {
        type: "append",
        path: "assets/scss/main.scss",
        pattern: `/* PLOP_COMPONENTS_IMPORT */`,
        template: `@import '{{route}}/{{name}}';`,
      },
    ],
  });
  plop.setGenerator("--Footer", {
    description: "Template Footer",
    prompts: [
      {
        type: "rawlist",
        name: "route",
        message: "",
        choices: ["version-1", "version-2", "version-3", "version-4"],
        answer: ["key:name", "value:route"],
      },
    ],
    actions: function (data) {
      var actions = [];

      if (data.route === "version-1") {
        actions.push(
          {
            type: "add",
            path: "kit/partials/_footer.kit",
            templateFile: "templates/html/[footer]ver1.hbs",
          },
          {
            type: "add",
            path: "assets/scss/partials/_footer.scss",
            templateFile: "templates/css/[footer]ver1.hbs",
          }
        );
      } else if (data.route === "version-2") {
        actions.push(
          {
            type: "add",
            path: "kit/partials/_footer.kit",
            templateFile: "templates/html/[footer]ver2.hbs",
          },
          {
            type: "add",
            path: "assets/scss/partials/_footer.scss",
            templateFile: "templates/css/[footer]ver2.hbs",
          }
        );
      } else if (data.route === "version-3") {
        actions.push(
          {
            type: "add",
            path: "kit/partials/_footer.kit",
            templateFile: "templates/html/[footer]ver3.hbs",
          },
          {
            type: "add",
            path: "assets/scss/partials/_footer.scss",
            templateFile: "templates/css/[footer]ver3.hbs",
          }
        );
      } else if (data.route === "version-4") {
        actions.push(
          {
            type: "add",
            path: "kit/partials/_footer.kit",
            templateFile: "templates/html/[footer]ver4.hbs",
          },
          {
            type: "add",
            path: "assets/scss/partials/_footer.scss",
            templateFile: "templates/css/[footer]ver4.hbs",
          }
        );
      }

      return actions;
    },
  });
  plop.setGenerator("--Modal", {
    description: "Template Modal",
    prompts: [
      {
        type: "rawlist",
        name: "route",
        message: "",
        choices: ["version-1"],
        answer: ["key:name", "value:route"],
      },
    ],
    actions: function (data) {
      var actions = [];

      if (data.route === "version-1") {
        actions.push(
          {
            type: "add",
            path: "kit/components/_popup.kit",
            templateFile: "templates/html/[modal-noti].hbs",
          },
          {
            type: "add",
            path: "assets/scss/components/_popup.scss",
            templateFile: "templates/css/[modal-noti].hbs",
          }
        );
      }
      return actions;
    },
  });
  plop.setGenerator("--Nav-right", {
    description: "Template navright",
    prompts: [
      {
        type: "rawlist",
        name: "route",
        message: "",
        choices: ["version-1"],
        answer: ["key:name", "value:route"],
      },
    ],
    actions: function (data) {
      var actions = [];

      if (data.route === "version-1") {
        actions.push(
          {
            type: "add",
            path: "kit/components/_navright.kit",
            templateFile: "templates/html/[nav-right].hbs",
          },
          {
            type: "add",
            path: "assets/scss/components/_navright.scss",
            templateFile: "templates/css/[nav-right].hbs",
          }
        );
      }
      return actions;
    },
  });
};
