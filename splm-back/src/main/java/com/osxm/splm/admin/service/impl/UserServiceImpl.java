/**
 * @Title: UserServiceImpl.java
 * @Package com.osxm.splm.admin.service.impl
 * @Description: TODO
 * @author osxm:oscarxueming
 * @date 2019年10月15日 下午10:30:01
 * @version V1.0
 */

package com.osxm.splm.admin.service.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Service;

import com.osxm.splm.admin.model.User;
import com.osxm.splm.admin.service.UserService;

/**
 * @ClassName: UserServiceImpl
 * @Description: TODO
 * @author oscarchen
 */
@Service
public class UserServiceImpl implements UserService {
	@PersistenceContext
	protected EntityManager em;

	// @Override
	public User get(String id) {
		// TODO Auto-generated method stub
		return em.find(User.class, id);
	}

	// @Override
	public void delete(String id) {
		// TODO Auto-generated method stub
		em.remove(get(id));
	}

	// @Override
	public User add(User entity) {
		// TODO Auto-generated method stub
		em.persist(entity);
		return entity;
	}

	// @Override
	public void update(User entity) {
		// TODO Auto-generated method stub
		em.merge(entity);
	}

	// @Override
	public List<User> list(String hql) {
		// TODO Auto-generated method stub
		return em.createQuery(hql, User.class).getResultList();
	}

	// @Override
	public List<User> listAll() {
		// TODO Auto-generated method stub
		return em.createQuery("from User", User.class).getResultList();
	}

}
