package software.wecreate.hadouken.application

import org.springframework.beans.factory.InitializingBean
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Profile

@Configuration
@Profile('development')
class WebpackLauncher {

	@Bean
	WebpackRunner frontRunner() {
		new WebpackRunner()
	}

	class WebpackRunner implements InitializingBean {
		static final String WEBPACK_SERVER_PROPERTY = 'webpack-server-loaded'

		static boolean isWindows() {
			System.getProperty('os.name').toLowerCase().contains('windows')
		}

		@Override
		void afterPropertiesSet() throws Exception {
			if (!System.getProperty(WEBPACK_SERVER_PROPERTY)) {
				startWebpackDevServer()
			}
		}

		void startWebpackDevServer() {
			String cmd = isWindows() ? 'cmd /c npm run watch' : 'npm run watch'
			cmd.execute(null as String[], new File('.')).consumeProcessOutput(System.out as OutputStream, System.err as OutputStream)
			System.setProperty(WEBPACK_SERVER_PROPERTY, 'true')
		}
	}
}