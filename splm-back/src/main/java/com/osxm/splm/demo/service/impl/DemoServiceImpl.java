/**
 * @Title: DemoServiceImpl.java
 * @Package com.osxm.splm.demo.service.impl
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ19ÈÕ
 * @version V1.0
 */
package com.osxm.splm.demo.service.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Service;

import com.osxm.splm.demo.model.Demo;
import com.osxm.splm.demo.service.DemoService;

/**
 * @ClassName: DemoServiceImpl
 * @Description: TODO
 * @author oscarchen
 */
@Service
public class DemoServiceImpl implements DemoService {
	@PersistenceContext
	protected EntityManager em;

	// @Override
	public Demo get(String id) {
		// TODO Auto-generated method stub
		return em.find(Demo.class, id);
	}

	// @Override
	public void delete(String id) {
		// TODO Auto-generated method stub
		em.remove(get(id));
	}

	// @Override
	public Demo add(Demo entity) {
		// TODO Auto-generated method stub
		em.persist(entity);
		return entity;
	}

	// @Override
	public void update(Demo entity) {
		// TODO Auto-generated method stub
		em.merge(entity);
	}

	// @Override
	public List<Demo> list(String hql) {
		// TODO Auto-generated method stub
		return em.createQuery(hql, Demo.class).getResultList();
	}

	// @Override
	public List<Demo> listAll() {
		// TODO Auto-generated method stub
		return em.createQuery("from Demo", Demo.class).getResultList();
	}

}