import {Stack, Link} from '@chakra-ui/react'
import { MenuItem } from './MenuItem'


const menus = [
  {
    id:1,
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-latestnews.svg",
    text:'Latest News',
    path:"/latestnews"
  },
  {
    id:2,
    url:'https://english.cdn.zeenews.com/static/public/icons/icons-photos.svg',
    text:'Photos',
    path:"/photos"
  },
  {
    id:3,
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-videos.svg",
    text:"Videos",
    path:"/videos"
  },
  {
    id:4,
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-explainer.svg",
    text:"Explainers",
    path:"/exlpainers"
  },
  {
    id:5,
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-india.svg",
    text:"India",
    path:"/india"
  },{
    id:6,
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg",
    text:"Entertainment",
    path:"/entertainment"
  },
  {
    id:7,
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-sports.svg",
    text:"Sports",
    path:"/sports"
  },
  {
    id:8,
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-viralNews.svg",
    text:"Viral News",
    path:"/viralnews"
  },
  {
    id:9,
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-lifestyle.svg",
    text:"Lifestyle",
    path:"/lifestyle"
  }, {
    id:10,
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-education.svg",
    text:"Education",
    path:"/education"
  }
  , {
    id:11,
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-business.svg",
    text:"Business",
    path:"/business"
  }
  , {
    id:12,
    url:"https://english.cdn.zeenews.com/static/public/icons/icons-world.svg",
    text:"World",
    path:"/world"
  }
  , {
    id:13,
    url:"https://english.cdn.zeenews.com/static/public/icons/ezmall-icon1.png",
    text:"Ezmall",
    path:"/ezmall"
  }

]
export const LeftNavbar = () => {
  return (
    <Stack >
      {menus.map((item)=>{
          return  <MenuItem url={item.url} text={item.text} path={item.path} id={item.id} key={item.id}/>
      })}
      
    </Stack>
  )
}
