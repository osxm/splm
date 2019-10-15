/**
 * @Title: UserService.java
 * @Package com.osxm.splm.admin.service
 * @Description: TODO
 * @author osxm:oscarxueming
 * @date 2019年10月15日 下午10:29:27
 * @version V1.0
 */

package com.osxm.splm.admin.service;

import java.util.List;

import com.osxm.splm.admin.model.User;

/**
 * @ClassName: UserService
 * @Description: TODO
 * @author osxm:oscarxueming
 */

public interface UserService {
	public User get(String id);

	public void delete(String id);

	public User add(User entity);

	public void update(User entity);

	public List<User> listAll();

	public List<User> list(String hql);
}
