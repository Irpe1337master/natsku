package animal

import grails.rest.*
import grails.converters.JSON

@Resource(uri='/cat')

class Cat {
  static belongsTo = [animal:Animal]
  String name
  String breed
  String age

  static constraints = {
    name blank: false
    breed blank: false
    age blank: false

  }

}
