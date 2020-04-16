package natsku

import animal.*
import grails.converters.JSON
import java.text.SimpleDateFormat
import grails.core.GrailsApplication
import org.grails.web.converters.marshaller.json.DeepDomainClassMarshaller

class BootStrap {

    def init = { servletContext ->

      def animal = new Animal(animalName:"Cat")
        .addToCats(new Cat(name:"Matti",breed:"van",age:"12"))
        .addToCats(new Cat(name:"Pete",breed:"angora",age:"10"))
        .save()

      articleMarshaler()
    }


    def destroy = {
    }

    private void articleMarshaler() {


        JSON.createNamedConfig('deep'){
          it.registerObjectMarshaller(Animal) { animal ->
            [
              id: animal.id,
              name: animal.animalName,
              article: animal.cats.collect { cat ->
                [
                  id: cat.id,
                  title: cat.name
                ]
              }
            ]
          }
        }

    }

}
