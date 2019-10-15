/**
 * @Title: CodeGenerator.java
 * @Package com.osxm.splm.develop
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ20ÈÕ
 * @version V1.0
 */
package com.osxm.splm.develop;

import java.io.File;

import com.osxm.splm.base.BaseUtil;
import com.osxm.splm.base.SplmException;

/**
 * @ClassName: CodeGenerator
 * @Description: TODO
 * @author oscarchen
 */
public class CodeGenerator {

	@SuppressWarnings("unused")
	private String projectPath;

	public CodeGenerator() {
		projectPath = BaseUtil.getProjectPath();
	}

	@SuppressWarnings("unused")
	public void generateBackClassCode(String moduleName, String className, String classDisName, boolean force)
			throws SplmException {
		String projectPath = BaseUtil.getProjectPath();
		// src\main\java\com\osxm\splm
		String javaSrcPath = "src" + File.separator + "main" + File.separator + "java" + File.separator + "com"
				+ File.separator + "osxm" + File.separator + "splm";
		if (moduleName == null || className == null) {
			// throw new SplmException("Please input ");
		}
		System.out.println(projectPath);
	}

	/**
	 * @Title: main
	 * @Description: TODO
	 * @param args
	 */

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// CodeGenerator generator = new CodeGenerator();
		// generator.generateModelClassCode("admin", "Usr", "User", false);
	}
}
