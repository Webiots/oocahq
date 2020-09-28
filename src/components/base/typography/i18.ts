import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "Gothamrounded":"Gotham rounded",
          "Aa":"Aa",
          "Bold":"Bold",
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ":"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          "abcdefghijklmnopqrstuvwxyz":"abcdefghijklmnopqrstuvwxyz",
          "1234567890!@#$%^&*()_+.,":"1234567890!@#$%^&*()_+.,",
          "Medium":"Medium",
          "Header1":"Header 1",
          "Pagetitlesforweb":"Page titles for web",
          "50pxBoldH56":"50px Bold H 56",
          "Header2":"Header 2",
          "Topictitle2":"Topic title 2, Modal Title",
          "Header3":"Header 3",
          "Topictitle3":"Topic title 3, Provider name on card",
          "20pxMediumH24":"20px Medium H 24",
          "Header4":"Header 4",
          "paras":"Paragraphs, Buttons",
          "16px":"16px Medium H 16",
          "Header5":"Header 5",
          "Form":"Form Label, Menu",
          "14pxmd":"14px Medium H 16",
          "para":"Paragraphs",
          "16pxbook":"16px Book H 24",
          "Desc":"Description, Input Text",
          "14pxbook":"14px Book H 24",
          "Captions":"Caption,tag,text,Error Message,Warning Message",
          "12pxBook":"12px Book H 16",
          "Small":"Small Text",
          "Caption":"Caption",
          "10pxBook":"10px Book H 12"
        }
      },
      th: {
        translations: {
            "Gothamrounded":"Prompt",
            "Aa":"อ๊า",
            "Bold":"Regular",
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ":"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "abcdefghijklmnopqrstuvwxyz":"abcdefghijklmnopqrstuvwxyz",
            "1234567890!@#$%^&*()_+.,":"1234567890!@#$%^&*()_+.,",
            "Medium":"Book",
            "Header1":"ส่วนหัว 1",
          "Pagetitlesforweb":"Page titles for web",
          "50pxBoldH56":"50px Bold H 56",
          "Header2":"ส่วนหัว 2",
          "Topictitle2":"Topic title 2, Modal Title",
          "Header3":"ส่วนหัว 3",
          "Topictitle3":"Topic title 3, Provider name on card",
          "20pxMediumH24":"20px Medium H 24",
          "Header4":"ส่วนหัว 4",
          "paras":"Paragraphs, Buttons",
          "16px":"16px Medium H 16",
          "Header5":"ส่วนหัว 5",
          "Form":"Form Label, Menu",
          "14pxmd":"14px Medium H 16",
          "para":"Paragraphs",
          "16pxbook":"16px Book H 24",
          "Desc":"Description, Input Text",
          "14pxbook":"14px Book H 24",
          "Captions":"Caption,tag,text,Error Message,Warning Message",
          "12pxBook":"12px Book H 16",
          "Small":"ข้อความขนาดเล็ก",
          "Caption":"Caption",
          "10pxBook":"10px Book H 12"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
