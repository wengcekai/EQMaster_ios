const __uniConfig = {"pages":[],"globalStyle":{"navigationBarTextStyle":"black","navigationBarTitleText":"应用名称","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#F8F8F8"},"appname":"test2","compilerVersion":"4.26","entryPagePath":"pages/landing/landing","entryPageQuery":"","realEntryPagePath":"","themeConfig":{}};
const __uniRoutes = [{"path":"pages/landing/landing","meta":{"isQuit":true,"isEntry":true,"navigationStyle":"custom"}},{"path":"pages/preference/preference","meta":{"navigationStyle":"custom"}},{"path":"pages/preference/preference1","meta":{"navigationStyle":"custom"}},{"path":"pages/preference/preference2","meta":{"navigationStyle":"custom"}},{"path":"pages/preference/preference3","meta":{"navigationStyle":"custom"}},{"path":"pages/test/test","meta":{"navigationStyle":"custom"}},{"path":"pages/test/test1","meta":{"navigationStyle":"custom"}},{"path":"pages/test/test2","meta":{"navigationStyle":"custom"}},{"path":"pages/test/test3","meta":{"navigationStyle":"custom"}},{"path":"pages/test/test4","meta":{"navigationStyle":"custom"}},{"path":"pages/test/test5","meta":{"navigationStyle":"custom"}},{"path":"pages/dashboard/dashboard","meta":{"navigationBarTitleText":""}},{"path":"pages/dashboard/dashboar1d","meta":{"navigationBarTitleText":""}},{"path":"pages/details/details","meta":{"navigationBarTitleText":""}},{"path":"pages/login/login","meta":{"navigationBarTitleText":""}},{"path":"pages/cta/cta","meta":{"navigationStyle":"custom"}},{"path":"pages/result/result","meta":{"navigationStyle":"custom"}},{"path":"pages/experience/experience","meta":{"navigationStyle":"custom"}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));

