import BigQueryTable from "../utils/bigquery";
import { Person } from "../graphql/types";

export interface User {
  _id: string;
  _roles_user?: boolean;
  _roles_admin?: boolean;
  _roles_superadmin?: boolean;
  _roles_sales?: boolean;
  _roles_analyst?: boolean;
  _roles_api?: boolean;
  _roles_catalog_api?: boolean;
  _roles_feed?: boolean;
  _roles_finance?: boolean;
  _roles_group_admin?: boolean;
  _roles_system?: boolean;
  _roles_trial?: boolean;
  _roles_fulfiller?: boolean;
  _roles_reward_manager?: boolean;
  active?: boolean;
  company_id?: string;
  created_at?: Date;
  first_name: string;
  group_ids?: string;
  has_viewed_catalogs?: boolean;
  last_activity?: Date;
  last_name: string;
  points_to_award?: number;
  points_to_redeem?: number;
  session__id?: string;
  session_select_all_mode?: boolean;
  show_terms_conditions_modal?: boolean;
  show_trial_admin_modal?: string;
  tag_stats?: string;
  updated_at?: Date;
  user_id?: string;
  user_setting__id?: string;
  user_setting__type?: string;
  user_setting_admin_emails?: string;
  user_setting_admin_notifications?: string;
  user_setting_auth_type?: string;
  user_setting_daily_workday_import_on?: boolean;
  user_setting_group_types?: string;
  user_setting_high_five_virgin?: boolean;
  user_setting_sales_force_test_mode?: boolean;
  user_setting_saml_send_signout?: boolean;
  user_setting_tax_reporting?: boolean;
  user_setting_tax_reporting_minimum_amount?: number;
  user_setting_theme?: string;
  user_setting_updated_at?: Date;
  user_setting_user_emails?: string;
  user_setting_user_info?: boolean;
  user_setting_user_notifications?: string;
  user_setting_auto_award_birthday?: boolean;
  user_setting_auto_award_anniversary?: boolean;
  user_setting_timezone?: string;
  user_setting_saml_sign_logout_request?: boolean;
  user_setting_saml_embed_signatures?: boolean;
  user_setting_enforce_unique_reference?: boolean;
  user_setting_non_taxable_birthday?: boolean;
  user_setting_non_taxable_anniversary?: boolean;
  user_setting_rollover_giving?: boolean;
  user_setting_custom_point_rules?: boolean;
  user_setting_rollup_hours?: number;
  user_setting_display_start_date_in_profile?: boolean;
  user_setting_display_dob_in_profile?: boolean;
  user_setting_skip_photo_upload_prompt?: boolean;
  user_setting_company_feed?: boolean;
  user_setting_groups_enabled?: boolean;
  user_setting_inter_group_giving?: boolean;
  user_setting_inter_group_visibility?: boolean;
  user_setting_default_points?: number;
  user_setting_allow_zero_point_recognition?: boolean;
  user_setting_emoji_picker?: boolean;
  user_setting_user_mobile_notifications?: string;
  user_setting_admin_mobile_notifications?: string;
  user_setting_locale?: string;
  user_setting_exclude_reward_redemptions?: boolean;
  user_setting_physical_markup_percentage?: number;
  user_setting_cost_transition_complete?: boolean;
  user_setting_cost_undo_complete?: boolean;
  user_setting_group_admin_role_populated?: boolean;
  user_setting_allow_profile_picture_uploads?: boolean;
  user_setting_media_expansion?: boolean;
  user_setting_media_expanded_by_default?: boolean;
  username?: string;
  archival_give_balance?: number;
  archival_redeem_balance?: number;
  has_user_uploaded_image?: boolean;
  notification_email?: string;
  login_email: string;
  encrypted_password?: string;
  sign_in_count?: number;
  current_sign_in_at?: Date;
  last_sign_in_at?: Date;
  current_sign_in_ip?: string;
  confirmed_at?: Date;
  failed_attempts?: number;
  password_salt?: string;
  linked_user_ids?: string;
  old_user_id?: string;
  last_sign_in_ip?: string;
  skill_stats?: string;
  mongoid_session_id?: string;
  locked_fields?: string;
  migrated_to_bcrypt?: boolean;
  combined_name?: string;
  combined_name_length?: number;
  image_updated_at?: Date;
  combined_name_last_first?: string;
  is_active_in_freshdesk?: boolean;
  show_profile_uploader_modal?: boolean;
  freshdesk_resources_updated?: boolean;
  user_segmentation_ids?: string;
  redemption_points?: string;
  giving_points?: string;
  show_birth_date_privacy_notice?: boolean;
  freshdesk_contact_id?: string;
  reference?: string;
  job_title?: string;
  about?: string;
  all_manager_ids?: string;
  refresh_tokens?: string;
  executive?: boolean;
  grs_member_id?: string;
  _roles_grs_admin?: boolean;
  _roles_platform_admin?: boolean;
  birth_date?: string;
  deleted_at?: Date;
  image?: string;
  user_setting_reward_surveys?: boolean;
  start_date?: string;
  dob_day?: number;
  dob_month?: number;
  post_ids?: string;
  in_post_ids?: string;
  last_active_at?: Date;
  last_inactive_at?: Date;
  birth_date_month?: number;
  birth_date_day?: number;
  start_date_month?: number;
  start_date_day?: number;
  accepted_terms_at?: Date;
  data_alert_ids?: string;
  last_archived_at?: Date;
  report_to?: string;
  reset_password_token?: string;
  login_redirect?: string;
  slack_credentials?: string;
  reset_password_sent_at?: Date;
  remember_created_at?: Date;
  shipping_address__id?: string;
  shipping_address_country?: string;
  shipping_address_street_1?: string;
  shipping_address_street_2?: string;
  shipping_address_city?: string;
  shipping_address_zip?: string;
  shipping_address_state?: string;
  shipping_address_u_at?: Date;
  user_setting_admin_notifications_points_redemption?: string;
  user_setting_admin_mobile_notifications_points_redemption?: string;
  user_setting_filter?: string;
  point_rule_id?: string;
  termination_date?: Date;
  authentication_token?: string;
  confirmation_token?: string;
  confirmation_sent_at?: Date;
  unconfirmed_email?: string;
  profile_switch?: Date;
  slack_credential?: string;
  shipping_address_name?: string;
  shipping_address_phone?: string;
  cropped_image_url?: string;
  user_setting_feed_filter_activityType_selected?: string;
  slack_credential__id?: string;
  slack_credential_user_id?: string;
  slack_credential_team_id?: string;
  slack_credential_user_name?: string;
  slack_credential_team_name?: string;
  slack_credential_access_token?: string;
  slack_credential_updated_at?: Date;
  slack_credential_created_at?: Date;
  user_setting_feed_filter_keyed_ids?: string;
  user_setting_feed_filter_reportsFilter_selected?: string;
  default_storefront_id?: string;
  unlock_token?: string;
  locked_at?: Date;
  user_setting_admin_emails_points_redemption?: string;
  user_setting_admin_emails_fullfillment_billing?: string;
  email?: string;
  title?: string;
  manager_id?: string;
  session_selected_ids_keyed_ids?: string;
  api_keys?: string;
  session_selected_ids_?: boolean;
  user_setting_admin_emails_subscription_billing?: string;
  profile_role_ids?: string;
  status?: string;
  user_setting_features?: string;
  password?: string;
  display_dob_in_profile?: boolean;
  display_start_date_in_profile?: boolean;
  group_names?: string;
  name_trigrams?: string;
  user_setting_default_giving_points?: number;
  user_setting_default_redemption_points?: number;
  user_setting_point_redemption_notifications?: boolean;
  user_setting_trial_period?: number;
  session_selected_ids_8921?: boolean;
  session_selected_ids_9526?: boolean;
  user_setting_experiments?: string;
  grs_admin_credentials_id?: string;
  cdc_other_values?: string;
  cdc_first_insert_at?: Date;
  cdc_last_update_at?: Date;
  cdc_destroyed_at?: Date;
}

const Users = new BigQueryTable<User>({
  name: "RR_users",
  // This table already exists so we do not specify the schema
  schema: [],
  dataset: "cdc_prod",
});

export const userToPerson = (user: User): Person => {
  return {
    id: user.login_email,
    name: `${user.first_name} ${user.last_name}`,
    image: `https://yei-production-images.s3.amazonaws.com/uploads/user_profile/image/${user._id}/${user.image}`,
    image160: `https://yei-production-images.s3.amazonaws.com/uploads/user_profile/image/${user._id}/size_160_${user.image}`,
    image30: `https://yei-production-images.s3.amazonaws.com/uploads/user_profile/image/${user._id}/size_30_${user.image}`,
    image70: `https://yei-production-images.s3.amazonaws.com/uploads/user_profile/image/${user._id}/size_70_${user.image}`,
    initials: `${user.first_name.charAt(0)} ${user.last_name.charAt(0)}`,
    jobTitle: user.title || user.job_title,
    profileUrl: `https://yei.kazoohr.com/profile/${user._id}`,
  };
};

export default Users;
