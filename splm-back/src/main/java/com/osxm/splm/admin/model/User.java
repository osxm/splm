/**
 * @Title: User.java
 * @Package com.osxm.splm.admin.model
 * @Description: TODO
 * @author osxm:oscarxueming
 * @date 2019年10月15日 下午10:27:53
 * @version V1.0
 */

package com.osxm.splm.admin.model;

import javax.persistence.Entity;

import com.osxm.splm.base.model.SplmRoot;

/**
 * @ClassName: User
 * @Description: TODO
 * @author osxm:oscarxueming
 */

@Entity
public class User extends SplmRoot {

	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
