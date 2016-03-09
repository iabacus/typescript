var gnbUrl;
var globalMenus = [
  { "label": "Handbook", "url": "", "parent_id": "-1", "id": "1" },
  { "label": "Basic Type", "url": "views/handbook/basictype.html", "parent_id": "1", "id": "1-1" },
  { "label": "Interfaces", "url": "views/basic/basic.html", "parent_id": "1", "id": "1-2" },
  { "label": "언어 스펙", "url": "views/basic/basic.html", "parent_id": "-1", "id": "2" },
  { "label": "예제", "url": "views/basic/basic.html", "parent_id": "-1", "id": "3" }
];

//트리 변환 메서드
var strEleemnt;
var builddata = function () {
    var source = [];
    var items = [];
    for (i = 0; i < globalMenus.length; i++) {
        var item = globalMenus[i];
        var label = item["label"];
        var parentid = item["parent_id"];
        var id = item["id"];
        var url = item["url"];

        if (items[parentid]) {
            var item = { parentid: parentid, label: label, url: url, item: item };
            if (!items[parentid].items) {
                items[parentid].items = [];
            }
            items[parentid].items[items[parentid].items.length] = item;
            items[id] = item;
        }
        else {
            items[id] = { parentid: parentid, label: label, url: url, item: item };
            source[id] = items[id];
        }
    }
    return source;
}

var buildUL = function ( items) {
    $.each(items, function () {
        if (this.label) {
            if (this.label.length > 0 && this.label != null) {
              strEleemnt += "<li >" + "<a  ng-click=\"callProject(\'"+ this.url +"\')\"  class='dropdown-toggle' data-toggle='dropdown' >" ;
              strEleemnt +=  this.label ;
              if (this.items && this.items.length > 0) {
                  strEleemnt += "<span class='caret'></span></a>";
              } else {
                  strEleemnt +=  "</a>";
              }
              if (this.items && this.items.length > 0) {
                  strEleemnt += "<ul class='dropdown-menu'>";
                  buildUL(this.items);
                  strEleemnt += "</ul>";
              }

              strEleemnt += "</li>";
          }
        }
    });
}
