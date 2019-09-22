/**
 * @Title: FileServiceImpl.java
 * @Package com.osxm.splm.base.service.impl
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ22ÈÕ
 * @version V1.0
 */
package com.osxm.splm.base.service.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.osxm.splm.base.service.FileService;

/**
 * @ClassName: FileServiceImpl
 * @Description: TODO
 * @author oscarchen
 */
@Service
public class FileServiceImpl implements FileService {

	public List<File> listFiles(String filePath) {
		List<File> fileList = new ArrayList<File>();
		fileList = listFilesWithDeep(fileList, filePath, 0);
		return fileList;
	}

	/**
	 * 
	 * @param fileList
	 * @param filePath
	 * @param iDeep,   max 10
	 * @return
	 */
	public List<File> listFilesWithDeep(List<File> fileList, String filePath, int iDeep) {
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
							fileList = listFilesWithDeep(fileList, fileTemp.getAbsolutePath(), iDeep + 1);
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
