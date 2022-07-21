import PropTypes from 'prop-types'
import React, { Component } from 'react'
import BlogItem from './BlogItem'

export class Blog extends Component {
  articles = [
    {
    "source": { "id": "ign", "name": "IGN" },
    "author": null,
    "title": "Circus Electrique - Release Date Trailer - IGN",
    "description": "<section class=\"video-page\"><p>Circus Electrique launches on PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, Nintendo Switch, and PC (via Steam and the Epic Games Store) on September 6, 2022. Check out the latest trailer for another look at this upco…",
    "url": "https://www.ign.com/videos/circus-electrique-release-date-trailer",
    "urlToImage": "https://assets-prd.ignimgs.com/2022/07/21/circuselectriquereleasedatetrailer-ign-blogroll-1658414032854.jpg?width=1280",
    "publishedAt": "2022-07-21T14:52:21.1506582Z",
    "content": "Circus Electrique launches on PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, Nintendo Switch, and PC (via Steam and the Epic Games Store) on September 6, 2022. Check out the latest trailer … [+354 chars]"
    },
    {
    "source": { "id": "ign", "name": "IGN" },
    "author": null,
    "title": "PlayStation Plus - IGN",
    "description": "The All-New PlayStation Plus Gives You Access to Hundreds of Games At Your Fingertips",
    "url": "https://www.ign.com/special/playstation-plus",
    "urlToImage": null,
    "publishedAt": "2022-07-20T16:52:22.4790187Z",
    "content": "The digital aggregation and evolution of a legendary video game catalog continues with the all-new PlayStation Plus subscription service. With a collection that spans 25+ years and is constantly upda… [+2643 chars]"
    },
    {
    "source": { "id": "polygon", "name": "Polygon" },
    "author": "Owen S. Good",
    "title": "Marvel’s Spider-Man Remastered on PC: Specs, launch date, features",
    "description": "Marvel’s Spider-Man Remastered launches for Windows PC computers on Aug. 12, 2022 from Steam and the Epic Games Store. The remaster will support ultra-wide monitors, advanced ray-tracing, and unlocked frame rates.",
    "url": "https://www.polygon.com/23271538/marvels-spider-man-remastered-pc-release-date-specs-minimum-features-trailer",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/m1OI6Uq3ZaDtmj_wMsUGTXkSEso=/0x31:1600x869/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23889110/52228213725_227d9afc45_h.jpg",
    "publishedAt": "2022-07-20T16:44:22Z",
    "content": "The remastered version hits Steam and the Epic Games Store next month"
    },
    {
    "source": { "id": "ign", "name": "IGN" },
    "author": "Chris Reed",
    "title": "Free Video Games You Can Download Right Now - IGN",
    "description": "All the free games you can download right now on PC, PS4, PS5, Xbox One, Xbox Series X|S, and more. This includes games that are outright free, as well as the free monthly games with Xbox Live Gold, PlayStation Plus, and Prime Gaming.",
    "url": "https://www.ign.com/articles/free-games-pc-ps4-ps5-xbox-one-series-x-nintendo-switch",
    "urlToImage": "https://assets-prd.ignimgs.com/2022/07/21/sf-1658417102614.jpeg?width=1280",
    "publishedAt": "2022-05-19T16:29:56Z",
    "content": "Want free games? Whether you play on PlayStation, Xbox, or PC, you can pretty much always find free games to download. While the free PC games tend to be fully, actually free, the free PS5, Xbox Seri… [+3901 chars]"
    },
    {
    "source": { "id": "bbc-sport", "name": "BBC Sport" },
    "author": "BBC Sport",
    "title": "Has Bellingham made himself an England starter?",
    "description": "Should Jude Bellingham be starting games for England, and why are fans booing Harry Maguire?",
    "url": "http://www.bbc.co.uk/sport/football/60922430",
    "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/0E32/production/_123943630_gettyimages-1239601245.jpg",
    "publishedAt": "2022-03-30T07:37:21.0756324Z",
    "content": "Jude Bellingham was named man of the match at Wembley\r\nEngland's 3-0 friendly victory against Ivory Coast at Wembley was as routine as it comes, but there was still plenty for manager Gareth Southgat… [+5781 chars]"
    },
    {
    "source": { "id": "reuters", "name": "Reuters" },
    "author": null,
    "title": "MLB and players fail to reach labor agreement, league cancels games",
    "description": "Major League Baseball (MLB) and its players union failed to reach a labor agreement by the league's Tuesday deadline and as a result, MLB has cancelled the first two series of the regular season, Commissioner Rob Manfred said.",
    "url": "https://www.reuters.com/lifestyle/sports/mlb-players-fail-reach-labor-agreement-espn-2022-03-01/",
    "urlToImage": "https://www.reuters.com/resizer/1qOcm7K-JkquxEYRe-bf8JbXPqA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BULRXQLN4BJ45HOQD3N6RWV5XY.jpg",
    "publishedAt": "2022-03-01T22:29:32Z",
    "content": "March 1 (Reuters) - Major League Baseball (MLB) and its players union failed to reach a labor agreement by the league's Tuesday deadline and as a result, MLB has cancelled the first two series of the… [+1814 chars]"
    },
    {
    "source": { "id": "the-hindu", "name": "The Hindu" },
    "author": "The Hindu",
    "title": "In search of gold: On Tokyo Olympics",
    "description": "The Olympic Games remain the greatest sporting event for fans and athletes alike",
    "url": "https://www.thehindu.com/opinion/editorial/in-search-of-gold-the-hindu-editorial-on-tokyo-olympics-2021/article35478354.ece",
    "urlToImage": "https://www.thehindu.com/static/theme/default/base/img/og-image.jpg",
    "publishedAt": "2021-07-22T18:32:00Z",
    "content": "A medal can lose its lustre but the athletes sporting immortality is set in stone, such is the enduring allure of triumphs at the Olympics. Even a participant without any titles, is referred to as an… [+2521 chars]"
    },
    {
    "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    "author": null,
    "title": "Five CSK games only hardcore fans will remember | ESPNcricinfo.com",
    "description": "From throwing a surprise in the batting order to smashing sixes after sixes, CSK have done it all | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/28974528/five-csk-games-only-hardcore-fans-remember",
    "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219712_1296x729.jpg",
    "publishedAt": "2020-03-31T10:23:03Z",
    "content": "If you're a Chennai Super Kings supporter, you'll remember MS Dhoni's sensational 29-ball 54 not out against Kings XI Punjab in Dharamsala in 2010 and that rare, pumped-up celebration where he jabbed… [+4410 chars]"
    },
    {
    "source": { "id": "the-sport-bible", "name": "The Sport Bible" },
    "author": "Ryan Sidle",
    "title": "Bury FC Have Been Expelled From The EFL",
    "description": "The League One side have had all of their games suspended up to now but have no failed to meet a second deadline to sell the club.",
    "url": "http://www.thesportbible.com/football/news-bury-fc-have-been-expelled-from-the-efl-20190827",
    "urlToImage": "http://beta.ems.ladbiblegroup.com/s3/content/808x455/0bb079b75d654f14eec508e0ffc957eb.png",
    "publishedAt": "2019-08-27T22:16:21Z",
    "content": "League One club Bury FC have been hit with the devastating news that their EFL membership has been withdrawn after owner Steve Dale failed to find a buyer for the club buy the 5pm deadline on Tuesday… [+2924 chars]"
    }
]


  constructor(){
    super();
    console.log(this.articles);
    this.state= {
      articles: this.articles
    }
  }
  static propTypes = {}

  render() {
    return (
      <div className='container'>
        <h1 className='text-2xl text-center mt-3 font-semibold'>top headlines</h1>
        <div className="row mt-4">
          <div className="col-md-4">
            <BlogItem tittle="helloo" discription="sajasklfjslflk"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Blog