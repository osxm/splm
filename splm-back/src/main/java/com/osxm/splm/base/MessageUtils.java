/**
 * @Title: MessageUtils.java
 * @Package com.osxm.splm.base
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ22ÈÕ
 * @version V1.0
 */
package com.osxm.splm.base;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Component;

/**
 * @ClassName: MessageUtils
 * @Description: TODO
 * @author oscarchen
 */
@Component
public class MessageUtils {

	@Autowired
	private MessageSource messageSource;

	public MessageUtils(MessageSource messageSource) {
		this.messageSource = messageSource;
	}

	public String get(String msgKey) {
		try {
			return messageSource.getMessage(msgKey, null, LocaleContextHolder.getLocale());
		} catch (Exception e) {
			return msgKey;
		}
	}
}
