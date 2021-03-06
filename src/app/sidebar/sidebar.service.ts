import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  constructor() {
  }

  getMenus() {
    let menu = [
      {
        "name": "Dashboard",
        "icon": "home",
        "links": "dashboard"
      },
      {
        "name": "UI Kit",
        "icon": "bubble_chart",
        "items": [
          {
            "name": "Buttons",
            "badeg": 3,
            "links": "/materials/buttons"
          },
          {
            "name": "Cards",
            "links": "/materials/cards"
          },
          {
            "name": "Lists",
            "links": "/materials/lists"
          },
          {
            "name": "Menu",
            "links": "/materials/menu"
          },
          {
            "name": "Slider",
            "links": "/materials/slider"
          },
          {
            "name": "Snack-Bar",
            "links": "/materials/sanck-bar"
          },
          {
            "name": "Toast",
            "links": "/materials/toast"
          },
          {
            "name": "Tooltips",
            "links": "/materials/tooltips"
          },
          {
            "name": "Dialogs",
            "links": "/materials/dialogs"
          },
          {
            "name": "Tabs",
            "links": "/materials/tabs"
          }

        ]
      },
      {
        "name": "Tables",
        "icon": "list",
        "items": [
          { "name": "Static Tables", "links": "/tables/static"},
          // { "name": "Responsive Tables", "links": "tables/responsive"},
          { "name": "Datatable", "links":"/tables/datatable"}
        ]
      },
      {
        "name": "Forms",
        "icon": "format_color_text",
        "items": [
          { "name": "Form Elements","links":"/forms/elements"},
          { "name": "Form validation","links":"/forms/validation"},
          { "name": "Ckeditor","links":"/forms/ckeditor"}
        ]
      },
      {
        "name": "Charts",
        "icon": "equalizer",
        "links": "/components/chart"
      },
      {
        "name": "Pages",
        "icon": "content_copy",
        "items": [
          {
            "name":"about",
            "links":"/pages/about"
          },
          {
            "name":"services",
            "links":"/pages/services"
          },
          {
            "name":"contact",
            "links":"/pages/contact"
          },
          {
            "name":"careers",
            "links":"/pages/careers"
          },
          {
            "name":"profile",
            "links":"/pages/profile"
          },
          {
            "name":"blog",
            "links":"/blog"
          },
          {
            "name":"faqs",
            "links":"/faqs"
          },
          {
            "name":"terms",
            "links":"/terms"
          },
          {
            "name":"收藏神器",
            "links":"/pages/collection"
          }
        ]
      },
      {"name":"Extra Pages", "icon":"more_horiz", "items": [
        {"name":"Sigin In", "links":"/signin"},
        {"name":"Sigin Up", "links":"/signup"},
        {"name":"404 Error", "links":"/404"}
      ]},
      {
        "name": "Apps",
        "icon": "apps",
        "items": [
          {
            "name": "Task",
            "links": "/apps/todo/All"
          },
          {
            "name": "Chat",
            "links": "/apps/chats"
          },
          {
            "name": "Mail",
            "links": "/apps/mail"
          },
          {
            "name": "码农庄园",
            "links": "/apps/navigation"
          }
        ]
      }
    ];

    return menu;
  }

}

