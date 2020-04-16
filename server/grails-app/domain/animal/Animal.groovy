package animal

import grails.rest.*
import grails.converters.JSON

@Resource(uri='/animal')
class Animal {

  String animalName
  static hasMany = [cats:Cat]

  static constraints = {
    animalName blank:false

  }


}
