import {Stack, Link} from '@chakra-ui/react'
import { MenuItem } from './MenuItem'


const menus = [
  {
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-latestnews.svg",
    text:'Latest News',
    path:"/latestnews"
  },
  {
    url:'https://english.cdn.zeenews.com/static/public/icons/icons-photos.svg',
    text:'Photos',
    path:"/photos"
  },
  {
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-videos.svg",
    text:"Videos",
    path:"/videos"
  },
  {
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-explainer.svg",
    text:"Explainers",
    path:"/exlpainers"
  },
  {
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-india.svg",
    text:"India",
    path:"/india"
  },{
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg",
    text:"Entertainment",
    path:"/entertainment"
  },
  {
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-sports.svg",
    text:"Sports",
    path:"/sports"
  },
  {
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-viralNews.svg",
    text:"Viral News",
    path:"/viralnews"
  },
  {
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-lifestyle.svg",
    text:"Lifestyle",
    path:"/lifestyle"
  }, {
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-education.svg",
    text:"Education",
    path:"/education"
  }
  , {
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-business.svg",
    text:"Business",
    path:"/business"
  }
  , {
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-world.svg",
    text:"World",
    path:"/world"
  }
  , {
    url:"https://english.cdn.zeenews.com/static/public/icons/ezmall-icon1.png",
    text:"Ezmall",
    path:"/ezmall"
  }

]
export const LeftNavbar = () => {
  return (
    <Stack >
      {menus.map((item)=>{
          return  <MenuItem url={item.url} text={item.text} path={item.path}/>
      })}
      
    </Stack>
  )
}
