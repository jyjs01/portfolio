"use client";

import { useMemo, useState } from "react";
import Container from "@/src/components/ui/Container";
import Card from "@/src/components/ui/Card";
import Input from "@/src/components/ui/Input";
import Textarea from "@/src/components/ui/Textarea";
import Button from "@/src/components/ui/Button";
import { Mail, Github, Linkedin, Clock } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    return form.name.trim().length >= 2 && okEmail && form.message.trim().length >= 5;
  }, [form]);

  const onChange = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setSubmitting(true);
    try {
      // ✅ 지금은 데모: mailto로 연결
      const subject = encodeURIComponent(`[포트폴리오 문의] ${form.name}`);
      const body = encodeURIComponent(`이름: ${form.name}\n이메일: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:developer@email.com?subject=${subject}&body=${body}`;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">연락하기</h2>
          <p className="mt-3 text-sm text-slate-500">프로젝트 문의나 협업 제안을 환영합니다</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Left */}
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-slate-900">연락처 정보</h3>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">이메일</p>
                    <p className="text-sm font-semibold text-slate-900">developer@email.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">GitHub</p>
                    <p className="text-sm font-semibold text-slate-900">github.com/developer</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">LinkedIn</p>
                    <p className="text-sm font-semibold text-slate-900">linkedin.com/in/developer</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="rounded-2xl bg-linear-to-r from-emerald-600 to-emerald-500 p-7 text-white shadow-sm">
              <h4 className="text-lg font-extrabold">함께 일하고 싶으신가요?</h4>
              <p className="mt-2 text-sm/6 text-white/90">
                새로운 프로젝트나 협업 기회에 대해 언제든지 연락 주세요. 빠른 시일 내에 답변드리겠습니다.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/90">
                <Clock className="h-4 w-4" />
                평균 응답 시간: 24시간 이내
              </div>
            </div>
          </div>

          {/* Right */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-900">메시지 보내기</h3>

            <form className="mt-5 space-y-4" onSubmit={onSubmit}>
              <Input label="이름" placeholder="홍길동" value={form.name} onChange={onChange("name")} />
              <Input label="이메일" placeholder="example@email.com" value={form.email} onChange={onChange("email")} />
              <Textarea
                label="메시지"
                placeholder="문의하실 내용을 입력해주세요..."
                value={form.message}
                onChange={onChange("message")}
                maxLength={500}
                helperRight={`${form.message.length}/500`}
              />

              <Button type="submit" className="w-full" disabled={!canSubmit || submitting}>
                메시지 보내기
              </Button>
            </form>
          </Card>
        </div>

        <footer className="mt-16 border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Frontend Developer Portfolio. All rights reserved.
        </footer>
      </Container>
    </section>
  );
}
