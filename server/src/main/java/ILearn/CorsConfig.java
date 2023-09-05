package ILearn;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class CorsConfig {
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOriginPatterns(Arrays.asList("")); // 모든 도메인 허용
        configuration.setAllowedMethods(Arrays.asList("")); // 모든 메서드 허용
        configuration.setAllowedHeaders(Arrays.asList("")); // 모든 헤더 허용
        configuration.setExposedHeaders(Arrays.asList("")); // 모든 노출 헤더 허용
        configuration.setAllowCredentials(true); // Credential 허용

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}

