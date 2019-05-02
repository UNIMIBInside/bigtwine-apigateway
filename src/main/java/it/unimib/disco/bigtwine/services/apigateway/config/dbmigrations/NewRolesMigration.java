package it.unimib.disco.bigtwine.services.apigateway.config.dbmigrations;

import com.github.mongobee.changeset.ChangeLog;
import com.github.mongobee.changeset.ChangeSet;
import it.unimib.disco.bigtwine.services.apigateway.domain.Authority;
import it.unimib.disco.bigtwine.services.apigateway.security.AuthoritiesConstants;
import org.springframework.data.mongodb.core.MongoTemplate;

@ChangeLog(order = "002")
public class NewRolesMigration {

    @ChangeSet(order = "01", author = "fausto", id = "01-addNewRoles")
    public void addNewRoles(MongoTemplate mongoTemplate) {
        Authority analysisAdminAuthority = new Authority();
        analysisAdminAuthority.setName(AuthoritiesConstants.ANALYSIS_ADMIN);
        Authority userProAuthority = new Authority();
        userProAuthority.setName(AuthoritiesConstants.USER_PRO);
        Authority userSocialAuthority = new Authority();
        userSocialAuthority.setName(AuthoritiesConstants.USER_SOCIAL);
        mongoTemplate.save(analysisAdminAuthority);
        mongoTemplate.save(userProAuthority);
        mongoTemplate.save(userSocialAuthority);
    }
}
