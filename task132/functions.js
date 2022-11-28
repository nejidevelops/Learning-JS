export const getLocale = (userConfig, knownLocales) => {
    let i;
    for( i in knownLocales ){
      if(userConfig.locale == knownLocales[i]){
        return userConfig.locale;
      }
    }
    return 'en';
}
