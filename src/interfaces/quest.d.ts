export type QuestT = "install_extension" | "submit_application" | "resolve-comment" | "save_first_company" | "add_contact"
    | "send_linkedin_message" | "send_linkedin_connection" | "send_first_email" | "add_new_contact" | "schedule_coffee_chat" | "send_follow_up_email";

export interface QuestI {
    id: string;
    user_id: string;
    type: QuestT;
    status: string;
    experience_points: number;
    due_date: string;
    company: CompanyI | null;
    contact: ContactI | null;
    job: JobI | null;
    created_at: string;
}

interface CompanyI {
    id: string;
    name: string;
    logo_url: string;
    linkedin_url: string;
}

interface ContactI {
    id?: string;
    first_name?: string;
    last_name?: string;
    profile_image?: string;
    linkedin_url?: string;
}

interface JobI {
    id?: string;
    title?: string;
}
