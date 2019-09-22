/**
 * @Title: CodeServiceImpl.java
 * @Package com.osxm.splm.develop.service.impl
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ22ÈÕ
 * @version V1.0
 */
package com.osxm.splm.develop.service.impl;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
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
	private String demoPath;

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

		File moduleDir = new File(modulePath);

		List<File> fileList = listDemoFilesAndInitDir(new ArrayList<File>(), demoPath, 0, moduleName);
		for (File file : fileList) {
			String demoFileName = file.getName();
			String demoFileFullName = file.getAbsolutePath();
			String demoFilePath = demoFileFullName.replace(File.separator + demoFileName, "");
			String newFilePath = demoFilePath.replace(demoPath, modulePath);
			String newFileName = demoFileName.replace("Demo", className);
			generateFileByTemplate(file, newFilePath, newFileName);
		}
		System.out.println(projectPath);
	}

	public void generateFileByTemplate(File tempFile, String filePath, String className) {
		try {
			String fileFullName = filePath + File.separator + className;
			InputStreamReader reader = new InputStreamReader(new FileInputStream(tempFile), "UTF-8");
			BufferedReader bfreader = new BufferedReader(reader);
			File newFile = new File(fileFullName);
			// FileOutputStream fout=new FileOutputStream(fileFullName,true);
			PrintWriter printWriter = new PrintWriter(new FileWriter(newFile, true), true);
			String line;
			while ((line = bfreader.readLine()) != null) {
				if (line.indexOf("Demo") > 0) {
					line = line.replace("Demo", className);
				}
				printWriter.write(line);
			}
			printWriter.flush();
			printWriter.close();
			bfreader.close();
			reader.close();
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	public List<File> listDemoFilesAndInitDir(List<File> fileList, String filePath, int iDeep, String moduleName) {
		if (fileList == null) {
			fileList = new ArrayList<File>();
		}
		if (iDeep > 10) {
			return fileList;
		}
		if (filePath != null) {
			File file = new File(filePath);
			if (file != null && file.isDirectory()) {
				File[] files = file.listFiles();
				if (files != null && files.length > 0) {
					for (File fileTemp : files) {
						if (fileTemp.isDirectory()) {
							String dirPath = fileTemp.getAbsolutePath();
							String newDir = dirPath.replace("Demp", moduleName);
							fileList = listDemoFilesAndInitDir(fileList, fileTemp.getAbsolutePath(), iDeep + 1,
									moduleName);
						} else {
							fileList.add(fileTemp);
						}
					}
				}
			}
		}
		return fileList;
	}
}
