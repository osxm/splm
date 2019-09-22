/**
 * @Title: I18nMessageTests.java
 * @Package com.osxm.splm.base
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ22ÈÕ
 * @version V1.0
 */
package com.osxm.splm.base;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
  * @ClassName: I18nMessageTests
  * @Description: TODO
  * @author oscarchen
  */
@RunWith(SpringRunner.class)
@SpringBootTest
public class I18nMessageTests {

	@Autowired
	private MessageUtils messageUtils;
	
	@Test
	public void get() {
		String msg = messageUtils.get("login");
		System.out.println(msg);
	}
}
