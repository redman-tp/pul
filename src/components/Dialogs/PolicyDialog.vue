<template>
  <q-dialog v-model="show" transition-show="fade" transition-hide="fade">
    <q-card
      style="
        width: 90vw;
        max-width: 1200px;
        height: 90vh;
        border-radius: 32px;
        overflow: hidden;
        background: rgba(248, 249, 250, 0.85);
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.5);
      "
    >
      <div class="tech-background">
        <div class="tech-element tech-circle"></div>
        <div class="tech-element tech-dots"></div>
        <div class="tech-element tech-wave"></div>
        <div class="tech-element tech-grid"></div>
      </div>

      <q-card-section class="dialog-header">
        <div class="header-content">
          <h2 class="dialog-title">
            Policies | Bills | Acts
            <span class="title-highlight">Developed and Contributed To</span>
          </h2>
          <q-btn round icon="close" flat dense v-close-popup class="close-btn" aria-label="Close" />
        </div>
      </q-card-section>

      <q-card-section class="dialog-body q-pt-none">
        <div class="container">
          <div class="intro-section">
            <p>
              Greysoft has been a pivotal contributor to the development and refinement of policies,
              bills, and acts that shape the digital and agricultural landscapes in Nigeria and
              beyond. Through our expertise in technology and policy advisory, we have collaborated
              with government agencies, international organizations, and private institutions to
              craft frameworks that drive digital transformation, enhance agritech innovation, and
              promote sustainable development. Our work ensures that these legislative tools are
              inclusive, forward-thinking, and aligned with global standards to foster growth and
              resilience across industries.
            </p>
            <p>
              Beyond the projects highlighted below, Greysoft is actively engaged in various other
              policy development initiatives that demonstrate our commitment to driving impactful
              change. Notably, we are the lead technology consultant for the Kaduna State Policy and
              Agricultural Systems Strengthening (PASS) project, ensuring the integration of
              cutting-edge digital solutions to enhance agricultural systems. Additionally, Greysoft
              is a contributing member of the team reviewing the Agricultural Innovation Playbook
              for the Alliance for Green Revolution in Africa (AGRA), reinforcing our role as a
              trusted partner in shaping the future of agritech and policy development across the
              continent.
            </p>
          </div>

          <div class="policies-grid">
            <div class="policy-card red-card">
              <div class="policy-title">
                <h3>National Digital Economy and E-Governance Bill</h3>
              </div>
              <div class="policy-description">
                <p>
                  Greysoft has contributed to the development of this transformative bill, aimed at
                  fostering a robust digital economy and advancing e-governance across Nigeria.
                </p>
              </div>
            </div>

            <div class="policy-card blue-card">
              <div class="policy-title">
                <h3>Kaduna Startup Act</h3>
              </div>
              <div class="policy-description">
                <p>
                  As a key contributor, Greysoft is supporting the domestication of the Nigeria
                  Startup Act in Kaduna State, creating a vibrant ecosystem for startups to thrive.
                </p>
              </div>
            </div>

            <div class="policy-card white-card">
              <div class="policy-title">
                <h3>Kaduna Agritech Policy</h3>
              </div>
              <div class="policy-description">
                <p>
                  Greysoft proudly championed the initiation, design, and development of this policy
                  to drive technological innovation and sustainability in agriculture across Kaduna
                  State.
                </p>
              </div>
            </div>

            <div class="policy-card green-card">
              <div class="policy-title">
                <h3>Kaduna Contract Farming Policy</h3>
              </div>
              <div class="policy-description">
                <p>
                  Greysoft has played an active role in shaping this policy, aimed at formalizing
                  and enhancing contract farming practices to benefit farmers and agribusinesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'PolicyDialog',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const show = ref(props.modelValue)

    // Watch for changes from parent
    watch(
      () => props.modelValue,
      (val) => {
        show.value = val
      },
    )

    // Watch for changes from dialog and emit to parent
    watch(
      () => show.value,
      (val) => {
        emit('update:modelValue', val)
      },
    )

    return {
      show,
    }
  },
}
</script>

<style>
/* Remove global styles to avoid conflicts */
</style>

<style scoped>
.policy-dialog {
  position: relative;
  background: rgba(248, 249, 250, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #333;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  /* Remove redundant styling */
}

.tech-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.5;
  z-index: 0;
  background: linear-gradient(135deg, rgba(141, 53, 74, 0.05) 0%, rgba(29, 38, 113, 0.05) 100%);
  will-change: transform; /* Hardware acceleration hint */
}

.tech-element {
  position: absolute;
  opacity: 0.3;
  will-change: transform;
}

.tech-circle {
  width: 600px;
  height: 600px;
  border: 1px solid rgba(141, 53, 74, 0.15);
  border-radius: 50%;
  top: -200px;
  right: -100px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border: 1px solid rgba(141, 53, 74, 0.1);
    border-radius: 50%;
    top: 150px;
    left: 150px;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }
}

.tech-dots {
  width: 400px;
  height: 400px;
  background-image: radial-gradient(circle, rgba(240, 208, 67, 0.3) 1px, transparent 1px);
  background-size: 20px 20px;
  bottom: 50px;
  left: 50px;
  transform: rotate(15deg);
}

.tech-wave {
  width: 100%;
  height: 300px;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(141, 53, 74, 0.05) 10px,
    rgba(141, 53, 74, 0.05) 20px
  );
  top: 40%;
  left: 0;
  transform: skewY(-8deg);
}

.tech-grid {
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(29, 38, 113, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(29, 38, 113, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.6;
}

@keyframes floatAnimation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.dialog-body::before {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(240, 208, 67, 0.1) 0%, transparent 70%);
  top: 30%;
  right: 10%;
  filter: blur(80px);
  opacity: 0.8;
  animation: floatAnimation 15s infinite ease-in-out;
  z-index: -1;
}

.dialog-body::after {
  content: '';
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(141, 53, 74, 0.1) 0%, transparent 70%);
  bottom: 20%;
  left: 10%;
  filter: blur(80px);
  opacity: 0.8;
  animation: floatAnimation 20s infinite ease-in-out reverse;
  z-index: -1;
}

.dialog-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1.5rem 2rem;
  border-radius: 24px 24px 0 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-title {
  font-family: 'Poppins', sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  color: #333;
}

.title-highlight {
  display: block;
  background: linear-gradient(90deg, #8d354a, #1d2671);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.close-btn {
  margin-left: 1rem;
  color: #333;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.close-btn:hover {
  background: rgba(141, 53, 74, 0.2);
  transform: rotate(90deg);
  box-shadow: 0 0 20px rgba(141, 53, 74, 0.3);
}

.dialog-body {
  position: relative;
  z-index: 1;
  padding: 2rem;
  padding-bottom: 5rem;
  overflow-y: auto;
  max-height: calc(95vh - 100px);
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  overflow-scrolling: touch;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 3rem;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.intro-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  will-change: transform, box-shadow;
}

.intro-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.8);
}

.intro-section::before,
.intro-section::after {
  display: none;
}

.intro-section p {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a4a4a;
  margin: 0 0 1rem 0;
}

.intro-section p:last-child {
  margin-bottom: 0;
}

.policies-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  height: auto;
  max-height: none;
  overflow-y: visible;
}

.policy-card {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.75);
  position: relative;
  height: 100%;
  min-height: 220px;
  will-change: transform;
}

.policy-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.85);
}

.policy-card::before {
  display: none;
}

.policy-title {
  padding: 1.5rem;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
}

.policy-title::after {
  display: none;
}

.policy-title h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.policy-description {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  flex-grow: 1;
  position: relative;
  z-index: 2;
  transition: background 0.2s ease;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
}

.policy-description p {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: #4a4a4a;
  transition: color 0.2s ease;
}

.policy-card:hover .policy-description {
  background: rgba(255, 255, 255, 0.9);
}

.policy-card:hover .policy-description p {
  color: #333;
}

.red-card .policy-title {
  background: linear-gradient(135deg, rgba(141, 53, 74, 0.9), rgba(158, 69, 91, 0.8));
}

.red-card .policy-title h3 {
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.blue-card .policy-title {
  background: linear-gradient(135deg, rgba(29, 38, 113, 0.9), rgba(45, 55, 137, 0.8));
}

.blue-card .policy-title h3 {
  color: #f8faff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.white-card .policy-title {
  background: linear-gradient(135deg, rgba(51, 51, 51, 0.9), rgba(68, 68, 68, 0.8));
}

.white-card .policy-title h3 {
  color: #f0d043;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.green-card .policy-title {
  background: linear-gradient(135deg, rgba(45, 157, 120, 0.9), rgba(60, 173, 143, 0.8));
}

.green-card .policy-title h3 {
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}

@media (max-width: 1200px) {
  .dialog-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 992px) {
  .intro-section {
    padding: 2rem;
  }

  .intro-section p {
    font-size: 1rem;
  }

  .policies-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
  }

  .dialog-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .dialog-header {
    padding: 1rem;
  }

  .dialog-body {
    padding: 1rem;
  }

  .dialog-title {
    font-size: 1.2rem;
  }

  .policies-grid {
    grid-template-columns: 1fr;
  }

  .policy-title h3 {
    font-size: 1.2rem;
  }

  .policy-description p {
    font-size: 0.9rem;
  }
}
</style>
