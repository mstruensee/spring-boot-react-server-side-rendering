package software.wecreate.hadouken.application

import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import org.springframework.core.io.ClassPathResource
import org.springframework.web.servlet.ViewResolver
import org.springframework.web.servlet.view.script.ScriptTemplateConfigurer
import org.springframework.web.servlet.view.script.ScriptTemplateViewResolver

@SpringBootApplication
class HadoukenApplication {

	static void main(String[] args) {
		SpringApplication.run HadoukenApplication, args
	}

	@Bean
	ViewResolver viewResolver() {
		return new ScriptTemplateViewResolver("/public/", ".html")
	}

	@Bean
	ScriptTemplateConfigurer scriptTemplateConfigurer() {
		ObjectMapper objectMapper = new ObjectMapper()
//		ClassPathResource classPathResource = new ClassPathResource("public/webpack-assets.json")
//		Map assets = objectMapper.readValue(classPathResource.getFile(), Map)

		def configurer = new ScriptTemplateConfigurer()
		configurer.engineName = "nashorn"
		configurer.setScripts(
			"static/polyfill.js",
			"public/server.js"
		)
		configurer.renderFunction = "render"
		return configurer
	}

}
