/**
 * @Title: BaseUtil.java
 * @Package com.osxm.splm.base
 * @Description: TODO
 * @author oscarchen
 * @date 2019��9��22��
 * @version V1.0
 */
package com.osxm.splm.base;

import java.io.File;
import java.io.IOException;

/**
 * @ClassName: BaseUtil
 * @Description: TODO
 * @author oscarchen
 */
public class BaseUtil {

	public static String getProjectPath() {
		File file = new File("");
		String path = "";
		try {
			path = file.getCanonicalPath();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return path;
	}
}
