/**
 * @Title: CodeServiceTests.java
 * @Package com.osxm.splm.develop
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ22ÈÕ
 * @version V1.0
 */
package com.osxm.splm.develop;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.osxm.splm.base.SplmException;
import com.osxm.splm.develop.service.impl.CodeServiceImpl;

/**
 * @ClassName: CodeServiceTests
 * @Description: TODO
 * @author oscarchen
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class CodeServiceTests {

	@Autowired
	private CodeServiceImpl codeService;

	@Test
	public void generateBackClassCode() throws SplmException {
		codeService.generateBackClassCode("admin", "User", "User", false);
	}
}
