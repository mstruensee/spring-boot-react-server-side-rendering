package software.wecreate.hadouken.application.controller

import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping

import javax.servlet.http.HttpServletRequest

@Controller
class HadoukenController {

	@Autowired
	ObjectMapper objectMapper

	@GetMapping("/{path:(?!.*.js|.*.css|.*.jpg|api).*\$}")
	String index(Model model, HttpServletRequest request) {

		Map requestData = [:]
		String root = request.servletPath
		if (request.servletPath == "/index.html")
			root = "/"

		if (request.queryString != null)
			requestData.put("location", String.format("%s?%s", root, request.queryString))
		else
			requestData.put("location", root)

		model.addAttribute("requestData", objectMapper.writeValueAsString(requestData))

		//todo: this initial data will change based on page ... figure out best way to handle this
		//todo: dto to match reducers + reducers initial states????
		Map preloadedState = [:]

		preloadedState.put("ITEMS_REDUCER", [
			[id: 0, name: "zero", quantity: 0],
			[id: 1, name: "one", quantity: 1],
			[id: 2, name: "two", quantity: 2],
			[id: 3, name: "three", quantity: 3]
		])
		model.addAttribute("preloadedState", objectMapper.writeValueAsString(preloadedState))
		return "index"
	}
}
