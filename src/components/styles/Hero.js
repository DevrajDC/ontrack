export default function styles(theme) {
    
    return {
        heroSection: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            color: 'white',
          },
          studentIll:{
            width:'80%',
            objectFit:'contain'
          },
          heroContent: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
          },
          blueText: {
            color: '#3F51B5',
          },
          heroTitle: {
            fontWeight: 500,
          },
          heroParagraph: {
            margin: '1rem 0',
            color: '#99B2D8',
            fontSize: '1.3rem',
            width: '95%',
            fontWeight: 520,
            marginLeft:'0rem !important',
            [theme.breakpoints.down('xs')]: {
              margin:'0rem !important',
              width:'100% !important',
              padding:'0rem 5rem'
            },
          },
          solidButton: {
            fontSize: '1rem',
            background: '#3F51B5',
            border: '3px solid #3F51B5',
            color: 'white',
            '&:hover': {
              background: '#3F51B5',
            },
            textTransform: 'none',
            margin: '0.5rem 0.5rem',
            padding: '0.25rem 2rem',
          },
          textGrid:{
            paddingLeft:'5rem',
            [theme.breakpoints.down('xs')]: {
              paddingLeft:'0rem',
              textAlign:'center',
              padding:'5rem 0rem'
            },
          },
          subTitle:{
            fontWeight:'600'
          },
          outlinedButton: {
            color: 'white',
            fontSize: '1rem',
            textTransform: 'none',
            border: '3px solid #3F51B5',
            margin: '0.5rem 0.5rem',
            padding: '0.25rem 2rem',
            '&:hover': {
              border: '3px solid #3F51B5',
            },
            
            
        },
    }
  }
  