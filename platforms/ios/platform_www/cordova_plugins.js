cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-actionsheet.ActionSheet",
        "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
        "pluginId": "cordova-plugin-actionsheet",
        "clobbers": [
            "window.plugins.actionsheet"
        ]
    },
    {
        "id": "cordova-plugin-calendar.Calendar",
        "file": "plugins/cordova-plugin-calendar/www/Calendar.js",
        "pluginId": "cordova-plugin-calendar",
        "clobbers": [
            "Calendar"
        ]
    },
    {
        "id": "cordova-plugin-native-keyboard.NativeKeyboard",
        "file": "plugins/cordova-plugin-native-keyboard/www/NativeKeyboard.js",
        "pluginId": "cordova-plugin-native-keyboard",
        "clobbers": [
            "window.NativeKeyboard"
        ]
    },
    {
        "id": "cordova-plugin-image-picker.ImagePicker",
        "file": "plugins/cordova-plugin-image-picker/www/imagepicker.js",
        "pluginId": "cordova-plugin-image-picker",
        "clobbers": [
            "plugins.imagePicker"
        ]
    },
    {
        "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
        "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
        "pluginId": "cordova-plugin-wkwebview-engine",
        "clobbers": [
            "cordova.exec"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-actionsheet": "2.3.3",
    "cordova-plugin-calendar": "4.5.5",
    "cordova-plugin-native-keyboard": "1.3.2",
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-image-picker": "1.1.1",
    "cordova-plugin-wkwebview-engine": "1.1.3"
};
// BOTTOM OF METADATA
});