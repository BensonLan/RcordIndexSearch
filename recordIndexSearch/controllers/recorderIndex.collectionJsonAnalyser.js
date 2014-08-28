/**
 * Created by YINGCHIEH on 8/26/2014.
 */

var recorderIndexCollectionJsonAnalyes = function () {
    var DataClass = function (name, value, prompt, href) {
        this.name = name;
        this.value = value;
        this.prompt = prompt;
        this.href = href;
        this.id = idCount++;
    }

    var idCount = 10;


    getDatasFromItems = function (collectionJson) {
        var datas = new Array();
        angular.forEach(collectionJson.collection.items, function (item) {
            angular.forEach(item.data, function (detailItem) {
                var data = new DataClass(detailItem.name, detailItem.value, detailItem.prompt, encodeURIComponent(item.href));
                datas.push(data);
            })
        })
        return datas;
    }
}();