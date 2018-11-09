package software.we.create.hadouken

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
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
