/**
 * @Title: Document.java
 * @Package com.osxm.splm.base.model
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ18ÈÕ
 * @version V1.0
 */
package com.osxm.splm.base.model;

import javax.persistence.Entity;

/**
 * @ClassName: Document
 * @Description: TODO
 * @author oscarchen
 */
@Entity
public class Document extends DataItem {

	private String name;

	private String hostName;

	private String filePath;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getHostName() {
		return hostName;
	}

	public void setHostName(String hostName) {
		this.hostName = hostName;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
}