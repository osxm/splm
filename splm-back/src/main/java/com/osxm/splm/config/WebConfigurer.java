/**
 * @Title: WebConfigurer.java
 * @Package com.osxm.splm.config
 * @Description: TODO
 * @author osxm:oscarxueming
 * @date 2019年10月15日 下午10:32:29
 * @version V1.0
 */

package com.osxm.splm.config;
/**
  * @ClassName: WebConfigurer
  * @Description: TODO
  * @author osxm:oscarxueming
  */

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @ClassName: WebConfigurer
 * @Description: TODO
 * @author oscarchen
 */
@Configuration
public class WebConfigurer {
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*").allowedMethods("*");

			}
		};
	}
}
