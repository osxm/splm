/**
 * @Title: DemoController.java
 * @Package com.osxm.splm.demo
 * @Description: TODO
 * @author oscarchen
 * @date 2019年9月18日
 * @version V1.0
 */
package com.osxm.splm.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @ClassName: DemoController
 * @Description: TODO
 * @author oscarchen
 */

@RestController
public class DemoController {
	
	@RequestMapping("/hello")
	public String Hello() {
		return "Hello SPLM" ;
	}
}
