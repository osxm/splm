/**
 * @Title: CodeServiceImpl.java
 * @Package com.osxm.splm.develop.service.impl
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ22ÈÕ
 * @version V1.0
 */
package com.osxm.splm.develop.service.impl;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.osxm.splm.base.BaseUtil;
import com.osxm.splm.base.SplmException;
import com.osxm.splm.base.service.AbstractService;
import com.osxm.splm.base.service.impl.FileServiceImpl;
import com.osxm.splm.develop.service.CodeService;

/**
 * @ClassName: CodeServiceImpl
 * @Description: TODO
 * @author oscarchen
 */
@Service
public class CodeServiceImpl extends AbstractService implements CodeService {
	
	private String projectPath;
	private String javaSrcPath;
	private String  demoPath;

	@Autowired
	private FileServiceImpl fileService;

	public CodeServiceImpl() {
		projectPath = BaseUtil.getProjectPath();
		 javaSrcPath = "src" + File.separator + "main" + File.separator + "java" + File.separator + "com"
				+ File.separator + "osxm" + File.separator + "splm";
		demoPath = this.projectPath + File.separator + javaSrcPath + File.separator + "demo";
	}

	public void generateBackClassCode(String moduleName, String className, String classDisName, boolean force)
			throws SplmException {
		String projectPath = BaseUtil.getProjectPath();
		// src\main\java\com\osxm\splm

		String[] errMsgArgs = new String[2];
		if (moduleName == null || className == null) {
			errMsgArgs[0] = "Module";
			errMsgArgs[1] = "Class";
			throwSplmException("1001Txt", errMsgArgs);
		}
		String modulePath = this.projectPath + File.separator + this.javaSrcPath + File.separator + moduleName;
		List<File> fileList = fileService.listFiles(demoPath);
		for (File file : fileList) {
			String demoFilePath = file.getAbsolutePath();
			String newFilePath = demoFilePath.replace(demoPath, modulePath);
			generateByTemplateFile(file,newFilePath);
		}
		System.out.println(projectPath);
	}
	
	public void generateByTemplateFile(File tempFile,String filePath) {
		
		
	}

}
