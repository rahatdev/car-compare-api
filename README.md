# vehicle-cost-calc
Figures out relative cost of vehicle based on year, model, kbb value, etc to produce cost per year and true total cost in 1/3/5 year period.


initial get from kbb value
- immediate costs (per month, per year)
- actual cost (depreciation,
- relative cost(compare to another vecicle) . -- i.e how much more money would I lose in the short term and overall if I picked car a vs b . (fuel costs, depreciation, interest, taxes)


## apis

### Vehicle Data
- [NHSTA API ](https://vpic.nhtsa.dot.gov/api/#)
- [carqueryapi](http://www.carqueryapi.com/documentation/api-usage/)


### Vehicle Value


### Vehicle Listings
* [marketcheck](https://apidocs.marketcheck.com/#intro)
Listings for car, not sure the cost per month for basic (has 30 day 20k/mth free evaluation).  Awesome api docs, just unsure of costs.  [demo site](https://www.marketcheck.com/)

[auto-data](https://www.auto-data.net)

[edmunds](http://developer.edmunds.com/)

#### Craigslist
* Awesome github gist on query params - https://gist.github.com/flodel/2573531 
* https://fayar.craigslist.org/search/cta?format=rss&query=pontiac+GTO&search_distance=100&postal=72703
* How do you solve for which craigslist to search for? Is there a general api based on location?

#### 3taps?
http://docs.3taps.com/search_api.html




TODO:
- Pull list of current cars from api
- search feature to quickly add cars to compare (i.e typing '2002 accord' should resolve to the correct vehicle)
- be able to get valuation based on selected car from car value api
- logic for figuring out monthly, yearly, 3/5/7/10 year cost. 
- add a second vehicle and compare the two
- add options for various potential things to factor in
    * add asset growth (invested remainder cash vs straight cash)
    * factor in risk-based maintenance (i.e a tacoma will have lot lower vs a dodge ram)
    * include gas/fueling costs
    * include projected depreciation
- finish and clean up front end
- add tests
- adjust as per usage and needs
- deploy



## ng notes
- ng new myApp --prefix r6 --style scss --routing
? how to follow particular folder structure, i.e src/app/components/[component-name], src/app/services/[service-name]