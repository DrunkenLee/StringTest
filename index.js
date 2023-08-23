const formatParts = require("./helpers/contentFormater");
const footerFormat = require("./helpers/footerFormater");
const templateSpliter = require("./helpers/spliter");

const inputString =
  "BIODATA INTERVIEW\n\nNAMA: NAMA SAYA\nSEKOLAH : BACHELOR OF DEGREE UNIVERSITY OF INDONESIA\nTANGGAL DAN JAM: 7/12/2021 15:22:32\n\nPROGRAMMING LANGUAGES: PHP, GO, JAVASCRIPT, SQL, PYTHON, RUBY, CSS, HTML, FRAMEWORK DLL(VUE JS, CODEIGNITER, RUBY ON RAILS, JQUERY, BOOTSTRAP, MYSQL, WORDPRESS) GOOGLE SERVICE(FIREBASE, GOOGLE ANALYTICS, BIGQUERY) VCS(GIT, GITLAB)\nTERIMA KASIH";

const header = templateSpliter(inputString, 1, 1);
const content = formatParts(templateSpliter(inputString, 2, 2)).join("\n");
const footer = footerFormat(templateSpliter(inputString, 3, 3), 30);

const renderString = () => {
  return `${header}\n\n${content}\n\n${footer}`;
};
console.log(renderString());
