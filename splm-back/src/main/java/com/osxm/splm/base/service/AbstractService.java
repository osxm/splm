/**
 * @Title: AbstractService.java
 * @Package com.osxm.splm.base.service
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ19ÈÕ
 * @version V1.0
 */
package com.osxm.splm.base.service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Service;

import com.osxm.splm.base.SplmException;

/**
 * @ClassName: AbstractService
 * @Description: TODO
 * @author oscarchen
 */
@Service
@Transactional
public class AbstractService {

	@PersistenceContext
	protected EntityManager em;

	@Autowired
	private MessageSource messageSource;

	public void throwSplmException(String errCode, String[] args) throws SplmException {
		String message = "";
		message = messageSource.getMessage(errCode, args, LocaleContextHolder.getLocale());
		throw new SplmException(message);
	}

	/*
	 * @SuppressWarnings("unchecked") public T get(String uid) { return (T)
	 * em.find(this.getActualClass(), uid); }
	 * 
	 * @SuppressWarnings({ "rawtypes" }) public Class getActualClass() { Class
	 * actualClass = null; Type genType = getClass().getGenericSuperclass(); if
	 * (!(genType instanceof ParameterizedType)) { actualClass = Object.class; }
	 * else { ParameterizedType pt = (ParameterizedType) genType; actualClass =
	 * (Class) pt.getActualTypeArguments()[0]; } return actualClass; }
	 */
}
