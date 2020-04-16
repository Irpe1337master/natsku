package animal

import grails.rest.*

@Resource(uri='/activity')
class Activity {

  String date
  String time
  String cat_id

  static constraints = {
    date blank: false
    time blank: false
    cat_id blank: false
  }

}
