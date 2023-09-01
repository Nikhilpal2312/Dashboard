import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors:{
    purple:{
      
    500:'#5f00d9',
    },
    p:{
      purple:'#5f00d9',
      black:'#171717',
    },
    black: {
      5:'#f3f3f7',
      10:'#eeef4',
      20:'#d8dde2',
      40:'#babac4',
      60:'#797e82',
      80:'#535d66',
    },
  },
  fonts: {
    heading: `ubuntu`,
    body: 'ubuntu',
  },
  fontSize:{
    xs:'12px',
    sm:'14px',
    base:{
      base:'16px',md: '18px',
    },
    lg:{
      base:'18px',md: '20px',
    },
    xl:{
      base:'20px',md: '22px',
    },
    "2xl":{
      base:'22px', md: '24px',
    },
    
    "3xl":{
      base:'24px', md: '28px',
    },
    
    "3xl":{
      base:'30px', md: '32px',
    },
  },
  textStyles:{
    h1:{
      fontSize:{
        md: '32px',
      },
      color:"p.black",
      lineHeight:{
        base:"34px",
        md: '36px'
      },
    },
    h2:{
      fontSize:{
        base:"24px",
        md:"28px",
      },
      color: "p.black",
      lineHeight:{base:"28px",md:"32px"},
    },
    h3:{
      fontSize:{
        base:"22px",
        md:"24px",
        xl:"32px",
      },
      color: "p.black",
      lineHeight:{base:"26px",md:"28px",xl:"36px"},
    },
    h4:{
      fontSize:{
        base:"20px",
        md:"22px",
      },
      color: "p.black",
      lineHeight:{base:"26px",md:"28px"},
    },
  },
    h5:{
      fontSize:{
        base:"18px",
        md:"20px",
      },
      color: "p.black",
      lineHeight:{base:"22px",md:"24px"},
    },

    h6:{
      fontSize:{
        base:"16px",
        md:"18px",
      },
      color: "p.black",
      lineHeight:{base:"20px",md:"22px"},
    },
    FormLabel:{
      baseStyle:{
        fontWeight:"bold",
        borderRadius:"10px",
      },
    },
    Input:{
      variants:{
       outline:{
        field:{
          h:"38px",
          borderRadius:"8px",
          fontSize:"sm",
          pb:"0",

          _focus:{
            boxShadow:"0 0 0 1px #5f00d9",
          },
        },
       },
      },
    },

    Textarea:{
      variants:{
       outline:{
          h:"38px",
          borderRadius:"8px",
          fontSize:"sm",
          _focus:{
            boxShadow:"0 0 0 1px #5f00d9",
        },
       },
      },
    },

  components:{
    Button:{
      baseStyle:{
        fontWeight:'bold',
        borderRadius:'10px',
      },
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#f3f3f7',
      },
      // styles for the `a`
   
    },
  },
},
withDefaultColorScheme({ colorScheme: 'purple' }),
)

export default theme;