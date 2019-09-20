/**
 * @Title: DemoService.java
 * @Package com.osxm.splm.demo.service
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ19ÈÕ
 * @version V1.0
 */
package com.osxm.splm.demo.service;

import java.util.List;

import com.osxm.splm.demo.model.Demo;

/**
 * @ClassName: DemoService
 * @Description: TODO
 * @author oscarchen
 */
public interface DemoService {
	public Demo get(String id);

	public void delete(String id);

	public Demo add(Demo entity);

	public void update(Demo entity);

	public List<Demo> listAll();

	public List<Demo> list(String hql);
}
