module.exports = {
  docs: [
    {
      type: "doc",       
      id: "profile/contents",  
    },
    {
      type: "category",   
      label: "Big Data",  
      items: [
        'bigData/bigData-hadoop',      
        'bigData/bigData-hive',          
        'bigData/bigData-trino',       
        'bigData/bigData-trino-catalog',
      ],
    },
    {
      type: "category",   
      label: "Linux",     
      items: [
        "linux/localhost-ssl",  
        "linux/tomcat-443",     
      ],
    },
    {
      type: "category", 
      label: "BaseX",     
      items: [
        "BaseX/rest-api",  
        "BaseX/rest-tls",  
      ],
    },
  ],
};
