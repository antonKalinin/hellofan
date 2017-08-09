export default function geoInit() {
    var geolocation = ymaps.geolocation;

    // Сравним положение, вычисленное по ip пользователя и
    // положение, вычисленное средствами браузера.
    geolocation.get({provider: 'yandex'}).then(result => {
        console.log(result.geoObjects.get(0).properties.get('metaDataProperty'));
    });
}
