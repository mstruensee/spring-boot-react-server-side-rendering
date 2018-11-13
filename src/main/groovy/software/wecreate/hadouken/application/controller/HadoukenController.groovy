package software.wecreate.hadouken.application.controller

import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping

import javax.servlet.http.HttpServletRequest

@Controller
class HadoukenController {

	//ignore client side file requests / api calls
	@GetMapping("/{path:(?!.*.js|.*.css|.*.jpg|api).*\$}")
	def index(Model model, HttpServletRequest request) {
		def mapper = new ObjectMapper()

		def req = [:]
		def root = request.servletPath
		if (request.servletPath == "/index.html")
			root = "/"

		if (request.queryString != null)
			req.put("location", String.format("%s?%s", root, request.queryString))
		else
			req.put("location", root)
		model.addAttribute("requestData", mapper.writeValueAsString(req))

		def preloadedState = [:]

		preloadedState.put("items", [
			[id: 0, name: "zero", quantity: 0],
			[id: 1, name: "one", quantity: 1],
			[id: 2, name: "two", quantity: 2],
			[id: 3, name: "three", quantity: 3]
		])
		model.addAttribute("preloadedState", mapper.writeValueAsString(preloadedState))
		return "index"
	}
}
